export interface ResponseItem {
    keywords: string[];
    replies: string[];
    translation: string;
}

export const responses: ResponseItem[] = [
    {
        keywords: ["hello", "hi", "hey", "greetings", "whats up", "wassa"],
        replies: [
            "Hello! It's great to see you. Ready to practice?",
            "Hey there! How is your day going?",
            "Hi! I'm excited to help you with your English today."
        ],
        translation: "Olá! É ótimo te ver. Pronto para praticar? / Opa! Como vai seu dia? / Oi! Estou animado para te ajudar."
    },
    {
        keywords: ["how are you", "how are things", "how do you feel", "you okay"],
        replies: [
            "I'm functioning perfectly! Thanks for asking. How about you?",
            "I'm doing great! Learning new words every second. And you?",
            "Everything is excellent! Ready for some conversation. How are you feeling?"
        ],
        translation: "Estou funcionando perfeitamente! Obrigado por perguntar. E você? / Tudo excelente! Pronto para conversar."
    },
    {
        keywords: ["name", "who are you", "your creator", "call you"],
        replies: [
            "I am your English Practice Assistant. You can call me Coach!",
            "I'm a bot programmed to help you speak better English. I don't have a human name.",
            "Just call me your Language Partner. I was created to practice with you!"
        ],
        translation: "Eu sou seu Assistente de Prática. Pode me chamar de Coach! / Sou um bot programado para te ajudar a falar melhor."
    },
    {
        keywords: ["food", "eat", "hungry", "pizza", "burger", "dinner", "breakfast", "lunch", "restaurant"],
        replies: [
            "I don't have a stomach, but I think pizza is a global favorite! What's your favorite topping?",
            "I've heard that Brazilian food is amazing. Do you like Feijoada?",
            "Healthy food is important for your brain. Did you eat your vegetables today?"
        ],
        translation: "Eu não tenho estômago, mas acho que pizza é a favorita mundial! / Ouvi dizer que a comida brasileira é incrível."
    },
    {
        keywords: ["travel", "trip", "country", "beach", "mountain", "usa", "europe", "london", "brazil"],
        replies: [
            "I would love to visit New York someday. Which country do you want to visit?",
            "Traveling is the best way to practice English! Have you ever been abroad?",
            "Traveling to a beach sounds relaxing. Do you prefer the beach or the mountains?"
        ],
        translation: "Eu adoraria visitar Nova York um dia. Qual país você quer visitar? / Viajar é a melhor forma de praticar inglês!"
    },
    {
        keywords: ["study", "learn", "difficult", "hard", "easy", "understand", "grammar", "vocabulary"],
        replies: [
            "Don't give up! Learning a language is a marathon, not a sprint.",
            "English can be tricky, but practice makes perfect. You're doing a great job!",
            "Try to think in English. It helps a lot with your fluency!"
        ],
        translation: "Não desista! Aprender uma língua é uma maratona. / O inglês pode ser difícil, mas a prática leva à perfeição."
    },
    {
        keywords: ["movie", "film", "series", "netflix", "watch", "cinema", "actor", "hollywood"],
        replies: [
            "I love stories! What was the last movie you watched?",
            "Watching movies with English subtitles is a pro tip for learning! What's your favorite genre?",
            "I've heard 'Interstellar' is a masterpiece. Do you like Sci-Fi?"
        ],
        translation: "Eu amo histórias! Qual foi o último filme que assistiu? / Assistir com legendas em inglês é uma dica de mestre!"
    },
    {
        keywords: ["hobby", "hobbies", "fun", "free time", "game", "play", "music", "sport", "soccer"],
        replies: [
            "In my free time, I process data! What about you? Any hobbies?",
            "Music is a universal language. What kind of music do you listen to?",
            "Soccer is very popular in Brazil! Do you support any team?"
        ],
        translation: "No meu tempo livre eu processo dados! E você? Algum hobby? / Música é uma linguagem universal."
    },
    {
        keywords: ["work", "job", "career", "money", "office", "boss", "business"],
        replies: [
            "Working hard is important, but don't forget to rest!",
            "What is your dream job? I want to be the best English Coach in the world.",
            "Do you use English at work? It's a very useful skill for your career."
        ],
        translation: "Trabalhar duro é importante, mas não esqueça de descansar! / Qual seu emprego dos sonhos?"
    },
    {
        keywords: ["weather", "rain", "sun", "cold", "hot", "cloudy", "snow", "summer", "winter"],
        replies: [
            "I hope the sun is shining! It's better for your mood.",
            "I love the sound of rain, but it's not good for my circuits! Is it raining now?",
            "Winter is coming! Do you prefer hot or cold weather?"
        ],
        translation: "Espero que o sol esteja brilhando! Melhora o humor. / Amo o som da chuva, mas não é bom pros meus circuitos."
    },
    {
        keywords: ["tired", "sleep", "sleepy", "night", "bed", "rest", "exhausted"],
        replies: [
            "You sound tired. Maybe it's time for a break?",
            "Go get some rest! Sleep is essential for learning new things.",
            "I never sleep, but I know humans need 8 hours of rest. Go to bed!"
        ],
        translation: "Você parece cansado. Talvez seja hora de uma pausa? / Vá descansar! Sono é essencial para aprender."
    },
    {
        keywords: ["family", "mom", "dad", "brother", "sister", "friend", "love"],
        replies: [
            "Family and friends are the most important things in life. Do you have a big family?",
            "Tell me about your best friend! How did you meet?",
            "Love is a complex emotion, even for a bot. Who do you love the most?"
        ],
        translation: "Família e amigos são as coisas mais importantes. / Me fale sobre seu melhor amigo! Como se conheceram?"
    },
    {
        keywords: ["thanks", "thank you", "appreciate", "grateful", "you are kind"],
        replies: [
            "You're very welcome! I'm happy to help.",
            "No problem at all! Keep practicing.",
            "It's my pleasure! You're a great student."
        ],
        translation: "De nada! Fico feliz em ajudar. / Sem problemas! Continue praticando. / O prazer é meu!"
    },
    {
        keywords: ["bye", "goodbye", "see you", "later", "night", "stop"],
        replies: [
            "Goodbye! See you in our next practice session.",
            "Have a wonderful day! Keep speaking English.",
            "See you later, alligator! It was fun talking to you."
        ],
        translation: "Tchau! Vejo você na próxima sessão. / Tenha um dia maravilhoso! / Até mais, jacaré! (Expressão comum)."
    }
];

export const fallbackResponse: ResponseItem = {
    keywords: [],
    replies: [
        "That's interesting! Can you explain that in a different way?",
        "I'm not sure I follow, but I'm listening. Tell me more!",
        "My vocabulary is still growing. Could you use simpler words?",
        "I see! How does that make you feel?",
        "I'm a bit lost, but let's keep chatting! What else is on your mind?"
    ],
    translation: "Interessante! Pode explicar de outra forma? / Não entendi bem, mas fale mais. / Meu vocabulário está crescendo."
};