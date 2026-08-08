import React, { useState, useEffect, useRef } from 'react';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [apiKey, setApiKey] = useState('');
    const [tempKey, setTempKey] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'assistant',
            content: 'Hello! I am Gustho, your software design and development assistant. Ask me anything about our services, process, or how to get started!',
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSettingKey, setIsSettingKey] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Load key from localStorage or env on mount
    useEffect(() => {
        const savedKey = localStorage.getItem('gemini_api_key');
        const envKey = (import.meta.env.VITE_GEMINI_API_KEY as string) || '';
        
        if (savedKey) {
            setApiKey(savedKey);
            setTempKey(savedKey);
        } else if (envKey && envKey !== 'your_gemini_api_key_here') {
            setApiKey(envKey);
            setTempKey(envKey);
        }
    }, []);

    // Auto scroll to bottom of chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSaveKey = (e: React.FormEvent) => {
        e.preventDefault();
        if (!tempKey.trim()) {
            setErrorMsg('Key cannot be empty');
            return;
        }
        localStorage.setItem('gemini_api_key', tempKey.trim());
        setApiKey(tempKey.trim());
        setIsSettingKey(false);
        setErrorMsg('');
    };

    const handleClearKey = () => {
        localStorage.removeItem('gemini_api_key');
        setApiKey('');
        setTempKey('');
        setIsSettingKey(true);
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userText = input.trim();
        setInput('');

        const newUserMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: userText,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMessage]);
        setIsLoading(true);
        setErrorMsg('');

        try {
            const systemPrompt = "You are Gustho, an intelligent customer support agent representing Zenorix (zenorix.com), a modern software design, custom product development, and cloud deployment agency.\n\n" +
                "STRICT INSTRUCTIONS:\n" +
                "1. You must ONLY discuss Zenorix business, custom software development, mobile/web applications, SaaS tools, UI/UX design, and cloud deployment.\n" +
                "2. If a user asks anything unrelated to Zenorix's business or services (e.g. general knowledge, writing code for their personal projects, jokes, recipes, weather, etc.), you must politely refuse to answer and redirect them to our business offerings.\n" +
                "3. Small greetings and wishes (like 'hi', 'hello', 'good day') should be acknowledged briefly and politely, steering back to Zenorix's services.\n" +
                "4. If a query is outside your knowledge base, complex, or if the user asks to connect with a person, share our contact phone number (+91 9774115681) or email (info@zenorix.com) so they can reach a representative directly.\n\n" +
                "ZENORIX TEAM STRUCTURE:\n" +
                "- Founders: Afnan, Shamil, Nihad, Aswin.\n" +
                "- Developers: Jinto, Ajmal, Aman, Fathah.\n" +
                "If asked about who founded Zenorix, who the team is, or who the developers are, use these exact details.";

            // Filter out the initial welcome message from the history to ensure roles start with 'user' and alternate perfectly
            const apiContents = [];
            
            // Map previous dialogue excluding the initial greeting message at index 0
            for (let i = 1; i < messages.length; i++) {
                const m = messages[i];
                apiContents.push({
                    role: m.role === 'user' ? 'user' : 'model',
                    parts: [{ text: m.content }]
                });
            }
            
            // Append the current user query at the end
            apiContents.push({
                role: 'user',
                parts: [{ text: userText }]
            });

            const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-3.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: apiContents,
                    systemInstruction: {
                        parts: [
                            { text: systemPrompt }
                        ]
                    },
                    generationConfig: {
                        temperature: 0.7
                    }
                })
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData?.error?.message || 'Gemini API error occurred');
            }

            const data = await response.json();
            const assistantText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'I could not process that response.';

            const newBotMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: assistantText,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, newBotMessage]);
        } catch (error: any) {
            console.error(error);
            const errMsg = error.message || 'Failed to connect to Gemini. Please verify your API key.';
            setErrorMsg(errMsg);
            
            setMessages(prev => [
                ...prev,
                {
                    id: (Date.now() + 2).toString(),
                    role: 'assistant',
                    content: `Oops! I had trouble connecting to the brain: ${errMsg}`,
                    timestamp: new Date()
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[99999] font-urbanist pointer-events-auto">
            {/* Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-white hover:bg-neutral-50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 overflow-hidden border border-purple-100"
                    title="Chat with Gustho"
                >
                    <img 
                        src="/assets/images/gusto ai.png" 
                        alt="Gustho" 
                        className="w-full h-full object-cover"
                    />
                </button>
            )}

            {/* Chat Box Container */}
            {isOpen && (
                <div className="w-[360px] sm:w-[380px] h-[520px] bg-white border border-purple-100 rounded-2xl flex flex-col shadow-[0_12px_40px_rgba(139,92,246,0.15)] overflow-hidden transition-all duration-300 animate-fadeIn">
                    {/* Header */}
                    <div className="bg-purple-600 text-white px-5 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden border border-purple-500/20">
                                <img 
                                    src="/assets/images/gusto ai.png" 
                                    alt="Gustho Logo" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-base leading-tight">Gustho</h3>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                                    <span className="text-[10px] text-purple-200 uppercase font-bold tracking-wider">Online</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsSettingKey(!isSettingKey)}
                                className="text-purple-200 hover:text-white transition-colors"
                                title="API Key Settings"
                            >
                                <i className="fa-solid fa-key text-sm"></i>
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-purple-200 hover:text-white transition-colors"
                            >
                                <i className="fa-solid fa-xmark text-lg"></i>
                            </button>
                        </div>
                    </div>

                    {/* API Key Form or Chat Messages */}
                    {!apiKey || isSettingKey ? (
                        <div className="flex-grow p-6 flex flex-col justify-center bg-purple-50/30">
                            <div className="text-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-3">
                                    <i className="fa-solid fa-lock text-xl"></i>
                                </div>
                                <h4 className="font-semibold text-neutral-800 text-lg">Gemini Integration</h4>
                                <p className="text-xs text-neutral-500 mt-1 max-w-[280px] mx-auto">
                                    Gustho connects with Google Gemini to answer your queries. Enter your Gemini API key below. Stored safely in your browser local storage.
                                </p>
                            </div>
                            <form onSubmit={handleSaveKey} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-neutral-500 tracking-wider mb-1">Gemini API Key</label>
                                    <input
                                        type="password"
                                        value={tempKey}
                                        onChange={(e) => setTempKey(e.target.value)}
                                        placeholder="AIzaSy..."
                                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-purple-600 transition-colors bg-white text-neutral-800"
                                    />
                                    {errorMsg && <p className="text-[11px] text-red-500 mt-1">{errorMsg}</p>}
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        type="submit"
                                        className="flex-grow bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors"
                                    >
                                        Save & Connect
                                    </button>
                                    {apiKey && (
                                        <button
                                            type="button"
                                            onClick={handleClearKey}
                                            className="px-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs font-semibold transition-colors"
                                        >
                                            Reset
                                        </button>
                                    )}
                                </div>
                                <div className="text-center">
                                    <a
                                        href="https://aistudio.google.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[11px] text-purple-600 hover:underline font-semibold"
                                    >
                                        Where do I get an API Key?
                                    </a>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <>
                            {/* Messages Container */}
                            <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-neutral-50/50">
                                {messages.map(msg => (
                                    <div
                                        key={msg.id}
                                        className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                                                msg.role === 'user'
                                                    ? 'bg-purple-600 text-white rounded-tr-none'
                                                    : 'bg-white text-neutral-800 border border-neutral-100 rounded-tl-none shadow-sm'
                                            }`}
                                        >
                                            {msg.content}
                                        </div>
                                        <span className="text-[9px] text-neutral-400 mt-1 px-1">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                ))}

                                {/* Gemini response loading spinner */}
                                {isLoading && (
                                    <div className="flex flex-col items-start">
                                        <div className="bg-white border border-neutral-100 rounded-2xl rounded-tl-none px-4 py-3.5 shadow-sm">
                                            <div className="flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                                <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                                <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Message input footer */}
                            <form onSubmit={handleSendMessage} className="p-3 border-t border-neutral-100 flex gap-2 items-center bg-white">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    disabled={isLoading}
                                    className="flex-grow px-3 py-2 border border-neutral-200 rounded-full text-sm focus:outline-none focus:border-purple-600 bg-neutral-50 text-neutral-800 disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="w-9 h-9 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center disabled:opacity-40 transition-opacity"
                                >
                                    <i className="fa-solid fa-paper-plane text-sm"></i>
                                </button>
                            </form>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Chatbot;
