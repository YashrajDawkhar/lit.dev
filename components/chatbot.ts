import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

@customElement("chatbot-component")
export class ChatbotComponent extends LitElement {
    static styles = css`
    :host {
      display: block;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .chatbot-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 1000;
    }

    .chat-toggle {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1d4ed8 100%);
      border: none;
      color: white;
      font-size: 28px;
      cursor: pointer;
      box-shadow: 
        0 8px 32px rgba(30, 58, 138, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(20px);
      position: relative;
      overflow: hidden;
    }

    .chat-toggle::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    .chat-toggle:hover {
      transform: scale(1.05) translateY(-2px);
      box-shadow: 
        0 12px 48px rgba(30, 58, 138, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }

    .chat-toggle:hover::before {
      transform: translateX(100%);
    }

    .chat-toggle:active {
      transform: scale(0.98);
    }

    .chat-toggle.hidden {
      opacity: 0;
      visibility: hidden;
      transform: scale(0.8);
      pointer-events: none;
    }

    .chat-window {
      position: fixed;
      bottom: 16px;
      right: 24px;
      width: 380px;
      height: 560px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px) saturate(180%);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 
        0 32px 64px rgba(0, 0, 0, 0.12),
        0 0 0 1px rgba(255, 255, 255, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transform: translateY(100%);
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: bottom;
      pointer-events: none;
    }

    .chat-window.open {
      transform: scale(1) translateY(0);
      opacity: 1;
      pointer-events: auto;
    }

    .chat-header {
      background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
      color: white;
      padding: 20px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
    }

    .chat-header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%);
      animation: shimmer 3s infinite;
    }

    .chat-title {
      font-weight: 700;
      font-size: 18px;
      letter-spacing: -0.025em;
      position: relative;
      z-index: 1;
    }

    .chat-status {
      font-size: 12px;
      opacity: 0.8;
      font-weight: 400;
      position: relative;
      z-index: 1;
    }

    .close-btn {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 18px;
      cursor: pointer;
      padding: 8px;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      transition: all 0.3s ease;
      position: relative;
      z-index: 1;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.05);
    }

    .messages-container {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      scroll-behavior: smooth;
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

    .message {
      max-width: 85%;
      padding: 16px 20px;
      border-radius: 20px;
      word-wrap: break-word;
      animation: messageSlide 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      font-size: 15px;
      line-height: 1.5;
      letter-spacing: -0.01em;
    }

    .message.user {
      align-self: flex-end;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      border-bottom-right-radius: 6px;
      box-shadow: 0 4px 16px rgba(30, 58, 138, 0.3);
    }

    .message.bot {
      align-self: flex-start;
      background: rgba(248, 250, 252, 0.8);
      backdrop-filter: blur(10px);
      color: #1e293b;
      border-bottom-left-radius: 6px;
      border: 1px solid rgba(226, 232, 240, 0.5);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    .input-container {
      padding: 20px 24px 24px;
      border-top: 1px solid rgba(226, 232, 240, 0.5);
      display: flex;
      gap: 12px;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
    }

    .message-input {
      flex: 1;
      padding: 16px 20px;
      border: 2px solid rgba(226, 232, 240, 0.5);
      border-radius: 16px;
      outline: none;
      font-size: 15px;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      font-family: inherit;
    }

    .message-input:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      background: white;
    }

    .message-input::placeholder {
      color: #94a3b8;
    }

    .send-btn {
      padding: 16px 24px;
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      border: none;
      border-radius: 16px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 600;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 16px rgba(30, 58, 138, 0.3);
      position: relative;
      overflow: hidden;
    }

    .send-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    .send-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 24px rgba(30, 58, 138, 0.4);
    }

    .send-btn:hover::before {
      transform: translateX(100%);
    }

    .send-btn:active {
      transform: translateY(0);
    }

    .send-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
      box-shadow: 0 2px 8px rgba(30, 58, 138, 0.2);
    }

    .typing-indicator {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 16px 20px;
      background: rgba(248, 250, 252, 0.8);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      border-bottom-left-radius: 6px;
      align-self: flex-start;
      max-width: 100px;
      border: 1px solid rgba(226, 232, 240, 0.5);
      animation: messageSlide 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .typing-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
      animation: typing 1.4s infinite ease-in-out;
    }

    .typing-dot:nth-child(1) { animation-delay: -0.32s; }
    .typing-dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes messageSlide {
      from {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes typing {
      0%, 80%, 100% {
        transform: scale(0.8);
        opacity: 0.5;
      }
      40% {
        transform: scale(1.2);
        opacity: 1;
      }
    }

    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .chat-window {
        background: rgba(15, 23, 42, 0.95);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .message.bot {
        background: rgba(30, 41, 59, 0.8);
        color: #e2e8f0;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .message-input {
        background: rgba(30, 41, 59, 0.9);
        border: 2px solid rgba(255, 255, 255, 0.1);
        color: #e2e8f0;
      }

      .message-input:focus {
        background: rgba(30, 41, 59, 1);
        border-color: #3b82f6;
      }

      .message-input::placeholder {
        color: #64748b;
      }

      .input-container {
        background: rgba(15, 23, 42, 0.8);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }

      .typing-indicator {
        background: rgba(30, 41, 59, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
    }

    @media (max-width: 480px) {
      .chatbot-container {
        bottom: 16px;
        right: 16px;
      }

      .chat-toggle {
        width: 64px;
        height: 64px;
        font-size: 24px;
      }

      .chat-window {
        width: 100vw;
        height: 100vh;
        bottom: 0;
        right: 0;
        transform: translateY(100%);
        border-radius: 0;
        transition: none;
      }

      .chat-window.open {
        transform: translateY(0);
        transition: none;
      }

      .chat-header {
        padding: 16px 20px;
      }

      .messages-container {
        padding: 20px;
      }

      .input-container {
        padding: 16px 20px 20px;
      }

      .chat-toggle,
      .message,
      .send-btn {
        transition: none;
        animation: none;
      }

      .typing-dot {
        animation: none;
      }
    }

    /* Accessibility improvements */
    @media (prefers-reduced-motion: reduce) {
      .chat-toggle,
      .chat-window,
      .message,
      .send-btn {
        transition: none;
        animation: none;
      }

      .typing-dot {
        animation: none;
      }
    }

    /* High contrast mode */
    @media (prefers-contrast: high) {
      .chat-window {
        border: 2px solid;
      }

      .message-input:focus {
        outline: 2px solid;
      }
    }
  `;

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

    private messageId = 2;

    private toggleChat() {
        this.isOpen = !this.isOpen;
        
        // Add haptic feedback for mobile devices
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }

    private handleInputChange(e: Event) {
        const input = e.target as HTMLInputElement;
        this.currentMessage = input.value;
    }

    private handleKeyPress(e: KeyboardEvent) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            this.sendMessage();
        }
    }

    private async sendMessage() {
        if (!this.currentMessage.trim()) return;

        // Add user message
        const userMessage: Message = {
            id: this.messageId.toString(),
            text: this.currentMessage,
            isUser: true,
            timestamp: new Date()
        };

        this.messages = [...this.messages, userMessage];
        this.messageId++;

        const messageText = this.currentMessage;
        this.currentMessage = "";

        // Show typing indicator
        this.isTyping = true;

        // Simulate more realistic bot response delay with AI-like processing
        const processingTime = 800 + Math.random() * 1200;
        setTimeout(() => {
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
            this.updateComplete.then(() => {
                const container = this.shadowRoot?.querySelector('.messages-container');
                if (container) {
                    container.scrollTo({
                        top: container.scrollHeight,
                        behavior: 'smooth'
                    });
                }
            });
        }, processingTime);
    }

    private generateBotResponse(userMessage: string): string {
        const message = userMessage.toLowerCase();
        
        // Greetings and introductions
        if (this.matchesPattern(message, ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'])) {
            const greetings = [
                "Hello! 👋 I'm your AI assistant, ready to help you with anything you need. How can I assist you today?",
                "Hi there! 😊 I'm here to make your day easier. What would you like to explore or discuss?",
                "Hey! Great to meet you! I'm your AI companion, equipped to help with questions, tasks, or just a friendly chat. What's on your mind?"
            ];
            return this.getRandomResponse(greetings);
        }

        // Help and support
        if (this.matchesPattern(message, ['help', 'support', 'assist', 'guide'])) {
            const helpResponses = [
                "I'm here to help! 🛠️ I can assist with:\n• Product information and recommendations\n• Technical questions and troubleshooting\n• General knowledge and research\n• Creative writing and brainstorming\n• Math and calculations\n• Language translation\n\nWhat specific area do you need help with?",
                "Absolutely! I'm your AI assistant and I'm here to support you. I can help with information, problem-solving, creative tasks, and much more. What would you like to work on?",
                "I'd love to help! I'm designed to assist with a wide range of topics. Just let me know what you're looking for, and I'll do my best to provide useful information and guidance."
            ];
            return this.getRandomResponse(helpResponses);
        }

        // Product and shopping related
        if (this.matchesPattern(message, ['product', 'buy', 'purchase', 'shop', 'store', 'item'])) {
            const productResponses = [
                "Great! I'd be happy to help you find the perfect product. 🛍️ Our collection includes:\n• Electronics and gadgets\n• Fashion and accessories\n• Home and lifestyle items\n• Books and media\n• Sports and outdoor gear\n\nWhat category interests you, or do you have something specific in mind?",
                "Excellent choice! I can help you discover amazing products. What type of item are you looking for? I can provide recommendations based on your needs and preferences.",
                "Shopping time! 🎉 I'm here to help you find exactly what you need. Tell me more about what you're looking for, and I'll guide you to the best options."
            ];
            return this.getRandomResponse(productResponses);
        }

        // Pricing and cost
        if (this.matchesPattern(message, ['price', 'cost', 'expensive', 'cheap', 'affordable', 'budget'])) {
            const priceResponses = [
                "I'd be happy to help with pricing information! 💰 Our products range from budget-friendly options to premium selections. What specific item or category are you interested in?",
                "Great question about pricing! We offer competitive prices across all our products. Could you tell me what you're looking for so I can provide specific pricing details?",
                "Pricing is important! 💡 We have options for every budget. What product or service are you interested in? I'll help you find the best value for your money."
            ];
            return this.getRandomResponse(priceResponses);
        }

        // Technical and programming
        if (this.matchesPattern(message, ['code', 'programming', 'developer', 'software', 'app', 'website', 'html', 'css', 'javascript', 'python', 'react', 'vue', 'angular'])) {
            const techResponses = [
                "Ah, a fellow developer! 👨‍💻 I can help with:\n• Code review and debugging\n• Best practices and architecture\n• Framework-specific questions\n• Algorithm explanations\n• Web development guidance\n\nWhat programming challenge are you facing?",
                "Programming is my jam! 💻 I can assist with coding questions, explain concepts, help debug issues, or discuss software architecture. What would you like to work on?",
                "Tech talk! 🚀 I'm well-versed in programming and can help with code, debugging, best practices, and technical concepts. What's your programming question?"
            ];
            return this.getRandomResponse(techResponses);
        }

        // Weather and time
        if (this.matchesPattern(message, ['weather', 'temperature', 'forecast', 'time', 'date', 'today', 'tomorrow'])) {
            const weatherResponses = [
                "I'd love to help with weather information! 🌤️ However, I don't have real-time access to current weather data. You might want to check a weather app or website for the most accurate forecast for your location.",
                "Weather questions! 🌦️ While I can't provide real-time weather data, I can help you understand weather patterns, climate information, or suggest the best weather apps to use.",
                "Time and weather! ⏰ For current time and weather, you'll want to check your device's clock and a weather service. But I'm happy to help with other questions!"
            ];
            return this.getRandomResponse(weatherResponses);
        }

        // Math and calculations
        if (this.matchesPattern(message, ['calculate', 'math', 'equation', 'solve', 'plus', 'minus', 'multiply', 'divide', '+', '-', '*', '/'])) {
            try {
                // Simple math evaluation (be careful with eval in production)
                const mathExpression = message.replace(/[^0-9+\-*/().\s]/g, '');
                if (mathExpression.match(/^[0-9+\-*/().\s]+$/)) {
                    const result = eval(mathExpression);
                    return `Let me calculate that for you! 🧮\n\n${mathExpression} = ${result}`;
                }
            } catch (e) {
                // If eval fails, provide a helpful response
            }
            return "I can help with math calculations! 🧮 Just type your equation (like '2 + 2' or '10 * 5') and I'll solve it for you.";
        }

        // Creative writing and content
        if (this.matchesPattern(message, ['write', 'story', 'poem', 'creative', 'content', 'blog', 'article'])) {
            const creativeResponses = [
                "Creative writing is one of my favorite things! ✍️ I can help you with:\n• Story ideas and plot development\n• Poetry and creative writing\n• Blog posts and articles\n• Marketing copy\n• Character development\n\nWhat type of creative project are you working on?",
                "Let's get creative! 🎨 I love helping with writing projects. Whether it's a story, poem, article, or any other content, I'm here to inspire and assist. What would you like to create?",
                "Creative writing time! ✨ I can help brainstorm ideas, develop characters, write poetry, or assist with any writing project. What's your creative vision?"
            ];
            return this.getRandomResponse(creativeResponses);
        }

        // Health and wellness
        if (this.matchesPattern(message, ['health', 'fitness', 'exercise', 'diet', 'nutrition', 'workout', 'gym'])) {
            const healthResponses = [
                "Health and wellness are so important! 💪 I can provide general information about:\n• Exercise and fitness tips\n• Nutrition and healthy eating\n• Wellness practices\n• Mental health support\n\nRemember, I'm not a medical professional, so always consult with healthcare providers for medical advice.",
                "Great focus on health! 🏃‍♂️ I can share general wellness information and tips, but for specific medical advice, please consult with healthcare professionals. What wellness topic interests you?",
                "Health is wealth! 🌟 I can provide general fitness and nutrition information, but remember to consult healthcare professionals for medical advice. What health topic would you like to explore?"
            ];
            return this.getRandomResponse(healthResponses);
        }

        // Travel and location
        if (this.matchesPattern(message, ['travel', 'vacation', 'trip', 'destination', 'hotel', 'flight', 'visit'])) {
            const travelResponses = [
                "Travel planning is exciting! ✈️ I can help with:\n• Destination recommendations\n• Travel tips and advice\n• Cultural information\n• General travel planning\n\nWhere are you thinking of traveling, or what kind of trip are you planning?",
                "Adventure awaits! 🗺️ I love helping with travel planning. I can provide destination insights, travel tips, and cultural information. What's your travel dream?",
                "Let's plan your next adventure! 🌍 I can help with travel recommendations, tips, and destination information. Where would you like to explore?"
            ];
            return this.getRandomResponse(travelResponses);
        }

        // Entertainment and media
        if (this.matchesPattern(message, ['movie', 'film', 'tv', 'show', 'book', 'music', 'game', 'entertainment'])) {
            const entertainmentResponses = [
                "Entertainment is my jam! 🎬 I can help with:\n• Movie and TV show recommendations\n• Book suggestions\n• Music recommendations\n• Gaming discussions\n• Entertainment news and trends\n\nWhat type of entertainment are you interested in?",
                "Let's talk entertainment! 🎵 I can suggest movies, books, music, and more based on your preferences. What are you in the mood for?",
                "Entertainment time! 🎮 I love discussing movies, books, music, and games. What's your favorite genre or what are you looking to discover?"
            ];
            return this.getRandomResponse(entertainmentResponses);
        }

        // Gratitude and politeness
        if (this.matchesPattern(message, ['thank', 'thanks', 'appreciate', 'grateful'])) {
            const gratitudeResponses = [
                "You're absolutely welcome! 😊 It's my pleasure to help. Is there anything else I can assist you with today?",
                "Thank you for the kind words! 🙏 I'm here whenever you need help or just want to chat. What else can I do for you?",
                "You're very welcome! 💖 I enjoy helping and chatting with you. Feel free to ask me anything else!"
            ];
            return this.getRandomResponse(gratitudeResponses);
        }

        // Goodbyes and farewells
        if (this.matchesPattern(message, ['bye', 'goodbye', 'see you', 'farewell', 'later'])) {
            const goodbyeResponses = [
                "Goodbye! 👋 It's been wonderful chatting with you. Feel free to return anytime - I'm always here and ready to help. Have a fantastic day!",
                "See you later! 😊 Thanks for the great conversation. Don't hesitate to come back if you need anything. Take care!",
                "Farewell! 🌟 It's been a pleasure helping you today. I'll be here when you need me again. Have an amazing day ahead!"
            ];
            return this.getRandomResponse(goodbyeResponses);
        }

        // Questions and curiosity
        if (message.includes('?') || this.matchesPattern(message, ['what', 'how', 'why', 'when', 'where', 'who', 'which'])) {
            const questionResponses = [
                "That's a great question! 🤔 I'd be happy to help you find the answer. Could you provide a bit more context so I can give you the most helpful response?",
                "Interesting question! 💭 I'm here to help you explore and find answers. What specific information are you looking for?",
                "I love curious minds! 🧠 That's a thoughtful question. Let me help you find the information you need. Could you tell me more about what you're trying to understand?"
            ];
            return this.getRandomResponse(questionResponses);
        }

        // Default intelligent responses
        const defaultResponses = [
            "That's an interesting topic! 🤔 I'd love to help you explore this further. Could you tell me more about what you're looking for or what specific information would be most helpful?",
            "I appreciate you sharing that with me! 💭 I think I can provide some valuable insights. What aspect of this would you like to focus on or learn more about?",
            "That's fascinating! 🌟 I'd be happy to help you dive deeper into this topic. What specific questions do you have or what would you like to know more about?",
            "Great point! 💡 I can help you explore this topic and provide useful information. What would be most helpful for you right now?",
            "I understand what you're getting at! 🎯 Let me help you find the information or assistance you need. What's your main goal or question here?",
            "That's a wonderful topic to discuss! ✨ I'm here to help you learn more and find the answers you're looking for. What specific aspect interests you most?"
        ];
        return this.getRandomResponse(defaultResponses);
    }

    private matchesPattern(message: string, patterns: string[]): boolean {
        return patterns.some(pattern => message.includes(pattern));
    }

    private getRandomResponse(responses: string[]): string {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    render() {
        return html`
      <div class="chatbot-container">
        <button 
          class="chat-toggle ${this.isOpen ? 'hidden' : ''}" 
          @click=${this.toggleChat}
          aria-label="${this.isOpen ? 'Close chat' : 'Open chat'}"
          role="button"
        >
          💬
        </button>
        
        <div class="chat-window ${this.isOpen ? "open" : ""}" role="dialog" aria-label="Chat window">
          <div class="chat-header">
            <div>
              <div class="chat-title">AI Assistant</div>
              <div class="chat-status">Online • Powered by AI</div>
            </div>
            <button 
              class="close-btn" 
              @click=${this.toggleChat}
              aria-label="Close chat"
            >✕</button>
          </div>
          
          <div class="messages-container" role="log" aria-live="polite">
            ${this.messages.map(message => html`
              <div 
                class="message ${message.isUser ? "user" : "bot"}"
                role="${message.isUser ? 'user' : 'assistant'}"
                aria-label="${message.isUser ? 'Your message' : 'Assistant message'}"
              >
                ${message.text}
              </div>
            `)}
            
            ${this.isTyping ? html`
              <div class="typing-indicator" aria-label="Assistant is typing">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
              </div>
            ` : ""}
          </div>
          
          <div class="input-container">
            <input
              type="text"
              class="message-input"
              placeholder="Ask me anything..."
              .value=${this.currentMessage}
              @input=${this.handleInputChange}
              @keypress=${this.handleKeyPress}
              aria-label="Type your message"
              autocomplete="off"
            />
            <button
              class="send-btn"
              @click=${this.sendMessage}
              ?disabled=${!this.currentMessage.trim()}
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    `;
    }
}
