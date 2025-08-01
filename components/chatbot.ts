import { html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwindMixin.js";

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

@customElement("chatbot-component")
export class ChatbotComponent extends TailwindElement {
    @state()
    private isOpen = false;

    @state()
    private messages: Message[] = [
        {
            id: "1",
            text: "Hello! I'm your AI assistant. I'm here to help you with any questions or tasks you might have. How can I assist you today?",
            isUser: false,
            timestamp: new Date()
        }
    ];

    @state()
    private currentMessage = "";

    @state()
    private isTyping = false;

    @state()
    private isMinimized = false;

    private messageId = 2;
    private messagesContainer?: HTMLElement | null;

    static styles = css`
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        @keyframes fade-slide {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-shimmer {
            animation: shimmer 2s infinite;
        }
        
        .animate-fade-slide {
            animation: fade-slide 0.3s ease-out;
        }
        
        .animation-delay-200 {
            animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
            animation-delay: 0.4s;
        }
        
        .messages-container {
            scrollbar-width: thin;
            scrollbar-color: rgba(59, 130, 246, 0.3) rgba(0, 0, 0, 0.05);
        }
        
        .messages-container::-webkit-scrollbar {
            width: 6px;
        }
        
        .messages-container::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.05);
            border-radius: 3px;
        }
        
        .messages-container::-webkit-scrollbar-thumb {
            background: rgba(59, 130, 246, 0.3);
            border-radius: 3px;
        }
        
        .messages-container::-webkit-scrollbar-thumb:hover {
            background: rgba(59, 130, 246, 0.5);
        }
    `;

    private toggleChat() {
        if (this.isMinimized) {
            this.isMinimized = false;
        } else {
            this.isOpen = !this.isOpen;
        }
        
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }

        if (this.isOpen) {
            this.updateComplete.then(() => {
                const input = this.shadowRoot?.querySelector('input');
                input?.focus();
            });
        }
    }

    private minimizeChat() {
        this.isMinimized = true;
    }

    private handleInputChange(e: Event) {
        const input = e.target as HTMLInputElement;
        this.currentMessage = input.value;
    }

    private handleKeyPress(e: KeyboardEvent) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            this.sendMessage();
        } else if (e.key === "Escape") {
            this.toggleChat();
        }
    }

    private async sendMessage() {
        if (!this.currentMessage.trim()) return;

        const userMessage: Message = {
            id: this.messageId.toString(),
            text: this.currentMessage.trim(),
            isUser: true,
            timestamp: new Date()
        };

        this.messages = [...this.messages, userMessage];
        this.messageId++;

        const messageText = this.currentMessage;
        this.currentMessage = "";

        this.isTyping = true;
        this.scrollToBottom();

        try {
            const processingTime = 800 + Math.random() * 1200;
            
            await new Promise(resolve => setTimeout(resolve, processingTime));
            
            this.isTyping = false;
            const botResponse = this.generateBotResponse(messageText);

            const botMessage: Message = {
                id: this.messageId.toString(),
                text: botResponse,
                isUser: false,
                timestamp: new Date()
            };

            this.messages = [...this.messages, botMessage];
            this.messageId++;

            this.scrollToBottom();
        } catch (error) {
            this.isTyping = false;
            const errorMessage: Message = {
                id: this.messageId.toString(),
                text: "I apologize, but I encountered an error. Please try again.",
                isUser: false,
                timestamp: new Date()
            };
            this.messages = [...this.messages, errorMessage];
            this.messageId++;
        }
    }

    private scrollToBottom() {
        this.updateComplete.then(() => {
            if (!this.messagesContainer) {
                this.messagesContainer = this.shadowRoot?.querySelector('.messages-container');
            }
            if (this.messagesContainer) {
                this.messagesContainer.scrollTo({
                    top: this.messagesContainer.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
    }

    private generateBotResponse(userMessage: string): string {
        const message = userMessage.toLowerCase().trim();
        
        if (!message) {
            return "I didn't receive your message. Could you please try again?";
        }
        
        if (this.matchesPattern(message, ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'])) {
            const greetings = [
                "Hello! 👋 I'm your AI assistant, ready to help you with anything you need. How can I assist you today?",
                "Hi there! 😊 I'm here to make your day easier. What would you like to explore or discuss?",
                "Hey! Great to meet you! I'm your AI companion, equipped to help with questions, tasks, or just a friendly chat. What's on your mind?"
            ];
            return this.getRandomResponse(greetings);
        }

        if (this.matchesPattern(message, ['help', 'support', 'assist', 'guide', 'what can you do', 'capabilities'])) {
            return "I'm here to help! 🛠️ I can assist with:\n• Product information and recommendations\n• Technical questions and troubleshooting\n• General knowledge and research\n• Creative writing and brainstorming\n• Math and calculations\n• Language translation\n• Planning and organization\n\nWhat specific area interests you?";
        }

        if (this.matchesPattern(message, ['thank', 'thanks', 'appreciate', 'grateful'])) {
            return "You're absolutely welcome! 😊 It's my pleasure to help. Is there anything else I can assist you with?";
        }

        if (this.matchesPattern(message, ['bye', 'goodbye', 'see you', 'farewell', 'later'])) {
            return "Goodbye! 👋 It's been wonderful chatting with you. Feel free to return anytime - I'm always here and ready to help!";
        }

        const defaultResponses = [
            "That's interesting! 🤔 I'd love to help you explore this further. Could you tell me more about what you're looking for?",
            "Great question! 💭 I'm here to help you find the information you need. What specific aspect would you like me to focus on?",
            "I understand what you're getting at! 🎯 Let me help you with this. What would be most helpful for you right now?",
            "That's a wonderful topic! ✨ I'm here to help you learn more. What specific questions do you have?"
        ];
        return this.getRandomResponse(defaultResponses);
    }

    private matchesPattern(message: string, patterns: string[]): boolean {
        return patterns.some(pattern => 
            message.includes(pattern) || 
            message.split(' ').some(word => word === pattern)
        );
    }

    private getRandomResponse(responses: string[]): string {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    private clearChat() {
        this.messages = [this.messages[0]];
        this.messageId = 2;
    }

    render() {
        return html`
            <!-- Chat Toggle Button -->
            <div class="fixed bottom-6 right-6 z-50">
                <button 
                    class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xl md:text-2xl transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-2xl active:scale-95 shadow-lg flex items-center justify-center border-2 border-blue-400 ${this.isOpen ? 'opacity-0 invisible scale-75 pointer-events-none' : ''}" 
                    @click=${this.toggleChat}
                    aria-label="${this.isOpen ? 'Close chat' : 'Open chat'}"
                >
                    💬
                </button>
            </div>
            
            <!-- Chat Window -->
            <div class="${this.isOpen && !this.isMinimized 
                ? "fixed inset-0 md:bottom-6 md:right-6 md:top-auto md:left-auto md:w-96 md:h-[600px] bg-white rounded-none md:rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out scale-100 opacity-100 pointer-events-auto border-0 md:border border-gray-200" 
                : "fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out scale-95 translate-y-full opacity-0 pointer-events-none border border-gray-200"}" 
                role="dialog" aria-label="Chat window" aria-modal="true">
                
                <!-- Header -->
                <div class="bg-blue-600 text-white p-4 flex items-center justify-between relative">
                    <div class="flex items-center gap-3">
                        <div class="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <div>
                            <div class="font-bold text-lg">AI Assistant</div>
                            <div class="text-sm opacity-90">Online • Ready to help</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-1">
                        <button 
                            class="hidden md:flex bg-white/20 hover:bg-white/30 text-white text-sm cursor-pointer p-2 w-8 h-8 items-center justify-center rounded-lg transition-all duration-200" 
                            @click=${this.minimizeChat}
                            aria-label="Minimize chat"
                            title="Minimize"
                        >—</button>
                        <button 
                            class="bg-white/20 hover:bg-white/30 text-white cursor-pointer p-2 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200" 
                            @click=${this.clearChat}
                            aria-label="Clear chat history"
                            title="Clear chat"
                        >🗑️</button>
                        <button 
                            class="bg-white/20 hover:bg-white/30 text-white cursor-pointer p-2 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200" 
                            @click=${this.toggleChat}
                            aria-label="Close chat"
                            title="Close"
                        >✕</button>
                    </div>
                </div>
                
                <!-- Messages Container -->
                <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4 messages-container bg-gray-50" role="log" aria-live="polite">
                    ${this.messages.map((message, index) => html`
                        <div 
                            class="flex ${message.isUser ? 'justify-end' : 'justify-start'}"
                            style="animation-delay: ${index * 0.1}s"
                        >
                            <div class="max-w-[85%] md:max-w-[80%] px-4 py-3 rounded-2xl break-words animate-fade-slide text-sm leading-relaxed ${
                                message.isUser 
                                    ? "bg-blue-600 text-white rounded-br-sm shadow-md" 
                                    : "bg-white text-gray-800 rounded-bl-sm border border-gray-200 shadow-sm"
                            }">
                                <div class="whitespace-pre-wrap">${message.text}</div>
                                <div class="text-xs ${message.isUser ? 'text-blue-100' : 'text-gray-400'} mt-2">
                                    ${message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        </div>
                    `)}
                    
                    ${this.isTyping ? html`
                        <div class="flex justify-start">
                            <div class="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl rounded-bl-sm border border-gray-200 shadow-sm animate-fade-slide">
                                <div class="flex gap-1">
                                    <div class="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
                                    <div class="w-2 h-2 rounded-full bg-blue-500 animate-bounce animation-delay-200"></div>
                                    <div class="w-2 h-2 rounded-full bg-blue-500 animate-bounce animation-delay-400"></div>
                                </div>
                                <span class="text-xs text-gray-500">Thinking...</span>
                            </div>
                        </div>
                    ` : ""}
                </div>
                
                <!-- Input Area -->
                <div class="p-4 border-t border-gray-200 bg-white">
                    <div class="flex gap-3">
                        <div class="flex-1 relative">
                            <input
                                type="text"
                                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none text-sm bg-white transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder-gray-400"
                                placeholder="Type your message..."
                                .value=${this.currentMessage}
                                @input=${this.handleInputChange}
                                @keydown=${this.handleKeyPress}
                                aria-label="Type your message"
                                autocomplete="off"
                                maxlength="1000"
                            />
                        </div>
                        <button
                            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white border-none rounded-xl cursor-pointer text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center min-w-[70px]"
                            @click=${this.sendMessage}
                            ?disabled=${!this.currentMessage.trim() || this.isTyping}
                            aria-label="Send message"
                        >
                            ${this.isTyping ? html`
                                <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ` : "Send"}
                        </button>
                    </div>
                    <div class="text-xs text-gray-400 mt-2 text-center">
                        Press Enter to send • Esc to close
                    </div>
                </div>
            </div>

            <!-- Minimized Chat Window (Desktop only) -->
            ${this.isMinimized ? html`
                <div class="hidden md:block fixed bottom-6 right-6 w-80 bg-white rounded-xl border border-gray-200 shadow-xl p-4 transition-all duration-300">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 rounded-full bg-green-400"></div>
                            <span class="font-medium text-gray-800">AI Assistant</span>
                            <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">${this.messages.length}</span>
                        </div>
                        <div class="flex gap-2">
                            <button 
                                class="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-md transition-colors"
                                @click=${this.toggleChat}
                                aria-label="Restore chat"
                            >
                                Restore
                            </button>
                            <button 
                                class="text-gray-400 hover:text-gray-600 text-sm w-6 h-6 flex items-center justify-center"
                                @click=${() => { this.isMinimized = false; this.isOpen = false; }}
                                aria-label="Close chat"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            ` : ""}
        `;
    }
}
