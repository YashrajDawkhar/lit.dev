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
        
        // Add haptic feedback for mobile devices
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }

        // Auto-focus input when opening
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

        // Add user message
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

        // Show typing indicator
        this.isTyping = true;

        // Scroll to bottom immediately for user message
        this.scrollToBottom();

        try {
            // Simulate more realistic bot response delay with AI-like processing
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

            // Smooth scroll to bottom with enhanced animation
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
        
        // Empty message handling
        if (!message) {
            return "I didn't receive your message. Could you please try again?";
        }
        
        // Greetings and introductions
        if (this.matchesPattern(message, ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'])) {
            const greetings = [
                "Hello! 👋 I'm your AI assistant, ready to help you with anything you need. How can I assist you today?",
                "Hi there! 😊 I'm here to make your day easier. What would you like to explore or discuss?",
                "Hey! Great to meet you! I'm your AI companion, equipped to help with questions, tasks, or just a friendly chat. What's on your mind?",
                "Good to see you! 🌟 I'm your personal AI assistant. Whether you need information, help with tasks, or just want to chat, I'm here for you!"
            ];
            return this.getRandomResponse(greetings);
        }

        // Help and support
        if (this.matchesPattern(message, ['help', 'support', 'assist', 'guide', 'what can you do', 'capabilities'])) {
            const helpResponses = [
                "I'm here to help! 🛠️ I can assist with:\n• Product information and recommendations\n• Technical questions and troubleshooting\n• General knowledge and research\n• Creative writing and brainstorming\n• Math and calculations\n• Language translation and learning\n• Planning and organization\n\nWhat specific area interests you?",
                "Absolutely! I'm your AI assistant with a wide range of capabilities. I can help with information lookup, problem-solving, creative tasks, learning, and much more. What would you like to work on?",
                "I'd love to help! 💡 I'm designed to assist with virtually anything - from answering questions to helping with projects. Just let me know what you're looking for!"
            ];
            return this.getRandomResponse(helpResponses);
        }

        // Product and shopping related
        if (this.matchesPattern(message, ['product', 'buy', 'purchase', 'shop', 'store', 'item', 'recommendation', 'suggest'])) {
            const productResponses = [
                "Great! I'd be happy to help you find the perfect product. 🛍️ Our collection includes:\n• Electronics and gadgets\n• Fashion and accessories\n• Home and lifestyle items\n• Books and media\n• Sports and outdoor gear\n• Beauty and personal care\n\nWhat category interests you, or do you have something specific in mind?",
                "Excellent choice! 🎯 I can help you discover amazing products tailored to your needs. What type of item are you looking for? I can provide personalized recommendations.",
                "Shopping time! 🎉 I'm here to help you find exactly what you need. Tell me more about your preferences, budget, or specific requirements!"
            ];
            return this.getRandomResponse(productResponses);
        }

        // Pricing and cost
        if (this.matchesPattern(message, ['price', 'cost', 'expensive', 'cheap', 'affordable', 'budget', 'money', 'value'])) {
            const priceResponses = [
                "I'd be happy to help with pricing information! 💰 We offer options for every budget, from value picks to premium selections. What specific item or category are you interested in?",
                "Great question about pricing! 💡 We believe in transparent, competitive pricing. Could you tell me what you're looking for so I can provide specific details?",
                "Budget-conscious shopping is smart! 🎯 We have excellent options across all price ranges. What product are you considering? I'll help you find the best value."
            ];
            return this.getRandomResponse(priceResponses);
        }

        // Technical and programming
        if (this.matchesPattern(message, ['code', 'programming', 'developer', 'software', 'app', 'website', 'html', 'css', 'javascript', 'python', 'react', 'vue', 'angular', 'api', 'database'])) {
            const techResponses = [
                "Ah, a fellow developer! 👨‍💻 I can help with:\n• Code review and debugging\n• Best practices and architecture\n• Framework-specific questions\n• Algorithm explanations\n• Web development guidance\n• API design and implementation\n\nWhat programming challenge are you facing?",
                "Programming is my specialty! 💻 I can assist with coding questions, explain complex concepts, help debug issues, or discuss software architecture. What would you like to work on?",
                "Tech talk! 🚀 I'm well-versed in multiple programming languages and frameworks. Whether it's frontend, backend, or full-stack development, I'm here to help!"
            ];
            return this.getRandomResponse(techResponses);
        }

        // Weather and time
        if (this.matchesPattern(message, ['weather', 'temperature', 'forecast', 'time', 'date', 'today', 'tomorrow', 'climate'])) {
            const weatherResponses = [
                "I'd love to help with weather information! 🌤️ While I don't have real-time weather access, I can help you understand weather patterns, suggest reliable weather apps, or discuss climate topics.",
                "Weather questions! 🌦️ For current conditions, I recommend checking a weather app, but I'm happy to discuss weather patterns, seasonal changes, or climate science!",
                "Time and weather! ⏰ For real-time data, check your device's built-in tools. But I can help with weather-related planning, understanding forecasts, or climate information!"
            ];
            return this.getRandomResponse(weatherResponses);
        }

        // Math and calculations
        if (this.matchesPattern(message, ['calculate', 'math', 'equation', 'solve', 'formula']) || /[\d+\-*/().]/.test(message)) {
            try {
                // Simple math evaluation (enhanced safety)
                const mathExpression = message.replace(/[^0-9+\-*/().\s]/g, '');
                if (mathExpression.match(/^[0-9+\-*/().\s]+$/) && mathExpression.trim()) {
                    const result = Function(`"use strict"; return (${mathExpression})`)();
                    if (typeof result === 'number' && isFinite(result)) {
                        return `Let me calculate that for you! 🧮\n\n${mathExpression.trim()} = ${result}`;
                    }
                }
            } catch (e) {
                // If calculation fails, provide helpful response
            }
            return "I can help with math calculations! 🧮 Just type your equation (like '2 + 2' or '10 * 5') and I'll solve it for you. I can also help explain mathematical concepts!";
        }

        // Creative writing and content
        if (this.matchesPattern(message, ['write', 'story', 'poem', 'creative', 'content', 'blog', 'article', 'essay', 'letter'])) {
            const creativeResponses = [
                "Creative writing is one of my passions! ✍️ I can help you with:\n• Story ideas and plot development\n• Poetry and creative writing\n• Blog posts and articles\n• Marketing copy and content\n• Character development\n• Writing techniques\n\nWhat type of creative project are you working on?",
                "Let's get creative! 🎨 I love helping with writing projects. Whether it's fiction, non-fiction, poetry, or professional content, I'm here to inspire and guide you.",
                "Creative writing time! ✨ I can help brainstorm ideas, develop narratives, improve style, or assist with any writing challenge. What's your creative vision?"
            ];
            return this.getRandomResponse(creativeResponses);
        }

        // Health and wellness
        if (this.matchesPattern(message, ['health', 'fitness', 'exercise', 'diet', 'nutrition', 'workout', 'gym', 'wellness', 'mental health'])) {
            const healthResponses = [
                "Health and wellness are so important! 💪 I can provide general information about:\n• Exercise and fitness tips\n• Nutrition and healthy eating\n• Wellness practices and habits\n• Mental health resources\n• Stress management\n\n⚠️ Remember, I'm not a medical professional, so always consult healthcare providers for medical advice.",
                "Great focus on health! 🏃‍♂️ I can share evidence-based wellness information and tips, but for specific medical concerns, please consult qualified healthcare professionals.",
                "Health is wealth! 🌟 I can provide general fitness, nutrition, and wellness information to support your healthy lifestyle goals. What area interests you most?"
            ];
            return this.getRandomResponse(healthResponses);
        }

        // Travel and location
        if (this.matchesPattern(message, ['travel', 'vacation', 'trip', 'destination', 'hotel', 'flight', 'visit', 'tourism', 'adventure'])) {
            const travelResponses = [
                "Travel planning is exciting! ✈️ I can help with:\n• Destination recommendations\n• Travel tips and packing advice\n• Cultural information and etiquette\n• Budget planning for trips\n• Activity suggestions\n\nWhere are you thinking of traveling, or what kind of adventure are you planning?",
                "Adventure awaits! 🗺️ I love helping with travel planning. I can provide destination insights, cultural tips, and practical travel advice. What's your travel dream?",
                "Let's plan your next adventure! 🌍 I can help with everything from choosing destinations to planning itineraries. Where would you like to explore?"
            ];
            return this.getRandomResponse(travelResponses);
        }

        // Entertainment and media
        if (this.matchesPattern(message, ['movie', 'film', 'tv', 'show', 'book', 'music', 'game', 'entertainment', 'netflix', 'streaming'])) {
            const entertainmentResponses = [
                "Entertainment is my specialty! 🎬 I can help with:\n• Movie and TV show recommendations\n• Book suggestions across all genres\n• Music recommendations\n• Gaming discussions and reviews\n• Entertainment trends and analysis\n\nWhat type of entertainment are you interested in exploring?",
                "Let's talk entertainment! 🎵 I can suggest content based on your preferences, discuss plots, or help you discover hidden gems. What genre or medium interests you?",
                "Entertainment time! 🎮 I love discussing movies, books, music, and games. Whether you want recommendations or want to analyze your favorites, I'm here!"
            ];
            return this.getRandomResponse(entertainmentResponses);
        }

        // Learning and education
        if (this.matchesPattern(message, ['learn', 'study', 'education', 'teach', 'explain', 'course', 'skill', 'knowledge'])) {
            const learningResponses = [
                "Learning is wonderful! 📚 I can help you:\n• Understand complex topics\n• Break down difficult concepts\n• Create study plans\n• Find learning resources\n• Practice and test knowledge\n\nWhat subject or skill would you like to explore?",
                "I love helping people learn! 🎓 Whether it's academic subjects, practical skills, or personal interests, I can explain concepts and guide your learning journey.",
                "Knowledge is power! 💡 I can adapt my explanations to your learning style and help make any topic more understandable. What would you like to learn about?"
            ];
            return this.getRandomResponse(learningResponses);
        }

        // Gratitude and politeness
        if (this.matchesPattern(message, ['thank', 'thanks', 'appreciate', 'grateful', 'awesome', 'great', 'excellent'])) {
            const gratitudeResponses = [
                "You're absolutely welcome! 😊 It's my pleasure to help. Your kind words mean a lot! Is there anything else I can assist you with?",
                "Thank you for the wonderful feedback! 🙏 I genuinely enjoy helping and chatting with you. What else can I do for you today?",
                "You're very welcome! 💖 I'm here whenever you need assistance or just want to have a conversation. Feel free to ask me anything!"
            ];
            return this.getRandomResponse(gratitudeResponses);
        }

        // Goodbyes and farewells
        if (this.matchesPattern(message, ['bye', 'goodbye', 'see you', 'farewell', 'later', 'exit', 'quit'])) {
            const goodbyeResponses = [
                "Goodbye! 👋 It's been wonderful chatting with you. Feel free to return anytime - I'm always here and ready to help. Have a fantastic day!",
                "See you later! 😊 Thanks for the great conversation. Don't hesitate to come back whenever you need assistance. Take care!",
                "Farewell! 🌟 It's been a pleasure helping you today. I'll be here when you need me again. Have an amazing day ahead!",
                "Until next time! 🌈 I really enjoyed our conversation. Remember, I'm just a click away whenever you need help or want to chat!"
            ];
            return this.getRandomResponse(goodbyeResponses);
        }

        // Questions and curiosity
        if (message.includes('?') || this.matchesPattern(message, ['what', 'how', 'why', 'when', 'where', 'who', 'which', 'can you'])) {
            const questionResponses = [
                "That's a fantastic question! 🤔 I'd be happy to help you find the answer. Could you provide a bit more context so I can give you the most helpful and accurate response?",
                "Excellent question! 💭 I love curious minds. Let me help you explore this topic thoroughly. What specific aspect would you like me to focus on?",
                "Great inquiry! 🧠 I'm here to help you understand and find answers. Could you tell me more about what you're trying to learn or accomplish?"
            ];
            return this.getRandomResponse(questionResponses);
        }

        // Complaints or negative feedback
        if (this.matchesPattern(message, ['bad', 'terrible', 'awful', 'hate', 'stupid', 'useless', 'wrong', 'error'])) {
            const supportiveResponses = [
                "I'm sorry you're having a frustrating experience! 😔 I genuinely want to help make things better. Could you tell me what's going wrong so I can assist you properly?",
                "I understand your frustration, and I apologize if something isn't working as expected. 🤝 Let me help you resolve this issue. What specifically can I help improve?",
                "That sounds really frustrating! 💙 I'm here to help turn this around. Please let me know what's bothering you, and I'll do my best to make it right."
            ];
            return this.getRandomResponse(supportiveResponses);
        }

        // Default intelligent responses (enhanced)
        const defaultResponses = [
            "That's a really interesting topic! 🤔 I'd love to help you explore this further. Could you tell me more about what specific information or assistance would be most valuable to you?",
            "I appreciate you sharing that with me! 💭 I think I can provide some valuable insights or assistance. What aspect of this would you like to focus on or dive deeper into?",
            "That's fascinating! 🌟 I'd be happy to help you learn more about this subject. What specific questions do you have, or what kind of help are you looking for?",
            "Great point! 💡 I can definitely help you explore this topic and provide useful information or guidance. What would be most helpful for you right now?",
            "I understand what you're getting at! 🎯 Let me help you find the information, resources, or assistance you need. What's your main goal or objective here?",
            "That's a wonderful topic to discuss! ✨ I'm here to help you learn, understand, or accomplish whatever you're working on. What specific aspect interests you most?",
            "Interesting perspective! 🔍 I'd love to help you with this. Could you share a bit more detail about what you're looking for or what you'd like to achieve?"
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
        this.messages = [this.messages[0]]; // Keep the initial greeting
        this.messageId = 2;
    }

    render() {
        return html`
      <div class="fixed bottom-6 right-6 z-50">
        <!-- Chat Toggle Button -->
        <button 
          class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white text-2xl transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-2xl active:scale-95 shadow-lg flex items-center justify-center backdrop-blur-sm border-2 border-blue-400/30 ${this.isOpen ? 'opacity-0 invisible scale-75 pointer-events-none' : ''}" 
          @click=${this.toggleChat}
          aria-label="${this.isOpen ? 'Close chat' : 'Open chat'}"
          role="button"
        >
          💬
        </button>
        
        <!-- Chat Window -->
        <div class="fixed bottom-4 right-4 w-96 h-[36rem] bg-white/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out ${this.isOpen && !this.isMinimized ? "scale-100 translate-y-0 opacity-100 pointer-events-auto" : "scale-95 translate-y-full opacity-0 pointer-events-none"} sm:w-screen sm:h-screen sm:bottom-0 sm:right-0 sm:rounded-none" role="dialog" aria-label="Chat window" aria-modal="true">
          
          <!-- Header -->
          <div class="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-4 flex items-center justify-between relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-shimmer"></div>
            <div class="relative z-10 flex items-center gap-3">
              <div class="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <div>
                <div class="font-bold text-lg tracking-tight">AI Assistant</div>
                <div class="text-sm opacity-80 font-normal">Ready to help • Powered by AI</div>
              </div>
            </div>
            <div class="relative z-10 flex items-center gap-2">
              <button 
                class="bg-white/10 hover:bg-white/20 text-white text-sm cursor-pointer p-2 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200" 
                @click=${this.clearChat}
                aria-label="Clear chat history"
                title="Clear chat"
              >🗑️</button>
              <button 
                class="bg-white/10 hover:bg-white/20 text-white text-sm cursor-pointer p-2 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200" 
                @click=${this.minimizeChat}
                aria-label="Minimize chat"
                title="Minimize"
              >—</button>
              <button 
                class="bg-white/10 hover:bg-white/20 text-white text-lg cursor-pointer p-2 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200" 
                @click=${this.toggleChat}
                aria-label="Close chat"
                title="Close"
              >✕</button>
            </div>
          </div>
          
          <!-- Messages Container -->
          <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-3 messages-container" role="log" aria-live="polite" aria-label="Chat messages">
            ${this.messages.map((message, index) => html`
              <div 
                class="max-w-[85%] px-4 py-3 rounded-2xl break-words animate-fade-slide text-sm leading-relaxed ${message.isUser ? "self-end bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-br-md shadow-md" : "self-start bg-gray-50 text-gray-800 rounded-bl-md border border-gray-200 shadow-sm"}"
                role="${message.isUser ? 'user' : 'assistant'}"
                aria-label="${message.isUser ? 'Your message' : 'Assistant message'}"
                style="animation-delay: ${index * 0.1}s"
              >
                <div class="whitespace-pre-wrap">${message.text}</div>
                <div class="text-xs opacity-60 mt-1">
                  ${message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            `)}
            
            ${this.isTyping ? html`
              <div class="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-2xl rounded-bl-md self-start max-w-20 border border-gray-200 animate-fade-slide" aria-label="Assistant is typing">
                <div class="flex gap-1">
                  <div class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <div class="w-2 h-2 rounded-full bg-blue-500 animate-pulse animation-delay-200"></div>
                  <div class="w-2 h-2 rounded-full bg-blue-500 animate-pulse animation-delay-400"></div>
                </div>
                <span class="text-xs text-gray-500">AI is thinking...</span>
              </div>
            ` : ""}
          </div>
          
          <!-- Input Area -->
          <div class="p-4 border-t border-gray-200 flex gap-3 bg-white/90 backdrop-blur-sm">
            <div class="flex-1 relative">
              <input
                type="text"
                class="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl outline-none text-sm bg-white transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder-gray-400"
                placeholder="Type your message... (Press Enter to send, Esc to close)"
                .value=${this.currentMessage}
                @input=${this.handleInputChange}
                @keydown=${this.handleKeyPress}
                aria-label="Type your message"
                autocomplete="off"
                maxlength="1000"
              />
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                ${this.currentMessage.length}/1000
              </div>
            </div>
            <button
              class="px-4 py-3 bg-gradient-to-br from-blue-500 to-blue-700 text-white border-none rounded-xl cursor-pointer text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-sm min-w-[4rem]"
              @click=${this.sendMessage}
              ?disabled=${!this.currentMessage.trim() || this.isTyping}
              aria-label="Send message"
            >
              ${this.isTyping ? "..." : "Send"}
            </button>
          </div>
        </div>

        <!-- Minimized Chat Window -->
        ${this.isMinimized ? html`
          <div class="fixed bottom-4 right-4 w-80 bg-white/95 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl p-4 transition-all duration-300" role="dialog" aria-label="Minimized chat">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                <span class="font-medium text-gray-800">AI Assistant</span>
                <span class="text-xs text-gray-500">${this.messages.length} messages</span>
              </div>
              <div class="flex gap-2">
                <button 
                  class="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-md transition-colors"
                  @click=${this.toggleChat}
                  aria-label="Restore chat"
                >
                  Restore
                </button>
                <button 
                  class="text-gray-400 hover:text-gray-600 text-sm"
                  @click=${() => { this.isMinimized = false; this.isOpen = false; }}
                  aria-label="Close chat"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ` : ""}
      </div>
    `;
    }
}
