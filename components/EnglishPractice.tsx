"use client";
import { useState, useEffect, useRef } from 'react';
import { responses, fallbackResponse } from '@/data/responses';

export default function EnglishPractice() {
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string, hint?: string }[]>([]);
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll para o fim do chat
    useEffect(() => {
        scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
    }, [messages]);

    // --- FUNÇÃO: BOT FALA (Text-to-Speech) ---
    const speak = (text: string) => {
        window.speechSynthesis.cancel(); // Para falas anteriores
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    };

    // --- FUNÇÃO: NAVEGADOR OUVE (Speech-to-Text) ---
    const startListening = () => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Seu navegador não suporta reconhecimento de voz.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.start();
        setIsListening(true);

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            handleSendMessage(transcript);
            setIsListening(false);
        };

        recognition.onerror = () => setIsListening(false);
        recognition.onend = () => setIsListening(false);
    };

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const userMsg = { role: 'user' as const, text };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Lógica de busca por palavra-chave
        const lowerText = text.toLowerCase();
        const found = responses.find(r =>
            r.keywords.some(k => lowerText.includes(k))
        ) || fallbackResponse;

        const botReply = found.replies[Math.floor(Math.random() * found.replies.length)];

        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'bot',
                text: botReply,
                hint: found.translation
            }]);
            speak(botReply);
        }, 600);
    };

    return (
        <div className="flex flex-col h-150 w-full max-w-2xl bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
            {/* Header */}
            <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
                <div>
                    <h2 className="text-blue-400 font-bold text-lg">English Coach</h2>
                    <p className="text-gray-400 text-xs">Modo: No-AI Pattern Matching</p>
                </div>
                <div className={`h-3 w-3 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                {messages.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">Say "Hello" to start practicing!</p>
                )}
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`group relative max-w-[85%] p-3 rounded-2xl shadow-sm ${m.role === 'user' ? 'bg-blue-600 rounded-tr-none' : 'bg-gray-700 rounded-tl-none'
                            }`}>
                            <p className="text-sm md:text-base">{m.text}</p>

                            {/* Legenda Visual (Hover) */}
                            {m.hint && (
                                <div className="absolute bottom-full mb-2 left-0 scale-0 group-hover:scale-100 transition-all origin-bottom-left z-10">
                                    <div className="bg-black text-white text-xs p-2 rounded-lg border border-gray-600 w-48 shadow-xl">
                                        <span className="text-blue-400 font-bold">Tradução:</span><br />
                                        {m.hint}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-gray-800 border-t border-gray-700 flex gap-2 items-center">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-950 border border-gray-700 rounded-full px-4 py-2 text-sm outline-none focus:border-blue-500 transition-all"
                />

                <button
                    onClick={startListening}
                    className={`p-3 rounded-full transition-all ${isListening ? 'bg-red-600 animate-bounce' : 'bg-gray-700 hover:bg-gray-600'}`}
                    title="Voice Mode (VoIP)"
                >
                    🎤
                </button>

                <button
                    onClick={() => handleSendMessage(input)}
                    className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-all"
                >
                    🚀
                </button>
            </div>
        </div>
    );
}