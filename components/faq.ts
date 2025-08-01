import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwindMixin.js";

@customElement("faq-component")
export class FAQComponent extends TailwindElement {
  @property({ type: Object })
  private openItems: Set<number> = new Set();

  private faqData = [
    {
      question: "What is Lit and how does it work?",
      answer:
        "Lit is a simple library for building fast, lightweight web components. It uses modern web standards and provides a declarative template system with efficient updates.",
      category: "basics"
    },
    {
      question: "How do I get started with Lit components?",
      answer:
        "To get started, install Lit via npm, create a class that extends LitElement, use the @customElement decorator, and define your template in the render() method.",
      category: "getting-started"
    },
    {
      question: "Can I use Lit with other frameworks?",
      answer:
        "Yes! Lit components are standard web components, so they work with any framework or vanilla JavaScript. They're framework-agnostic and interoperable.",
      category: "integration"
    },
    {
      question: "What are the performance benefits of Lit?",
      answer:
        "Lit provides efficient updates through its reactive update cycle, small bundle size, and leverages browser-native features like Shadow DOM for encapsulation.",
      category: "performance"
    },
    {
      question: "How do I handle events in Lit components?",
      answer:
        "You can handle events using the @event syntax in templates, or by adding event listeners in the connectedCallback() lifecycle method.",
      category: "events"
    },
  ];

  private toggleItem(index: number) {
    if (this.openItems.has(index)) {
      this.openItems.delete(index);
    } else {
      this.openItems.add(index);
    }
    this.requestUpdate();
  }

  private getCategoryColor(category: string): string {
    const colors = {
      basics: "bg-blue-100 text-blue-800",
      "getting-started": "bg-green-100 text-green-800",
      integration: "bg-purple-100 text-purple-800",
      performance: "bg-orange-100 text-orange-800",
      events: "bg-pink-100 text-pink-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  }

  render() {
    return html`
      <div class="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-4 md:p-8">
        <div class="max-w-4xl mx-auto">
          <!-- Header Section -->
          <div class="text-center mb-12">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-xl mb-6 text-2xl">
              ❓
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p class="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about Lit and web components
            </p>
          </div>

          <!-- FAQ Content -->
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
            <div class="space-y-6">
              ${this.faqData.map((item, index) => html`
                <div class="group">
                  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <!-- Question Button -->
                    <button
                      class="w-full p-6 text-left transition-all duration-300 border-none ${this.openItems.has(index)
        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
        : 'bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 text-gray-800'
      }"
                      @click=${() => this.toggleItem(index)}
                      aria-expanded="${this.openItems.has(index)}"
                      aria-controls="answer-${index}"
                    >
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4 flex-1">
                          <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                            ${index + 1}
                          </div>
                          <div class="flex-1">
                            <div class="flex items-center space-x-3 mb-2">
                              <h3 class="text-lg font-semibold flex-1">
                                ${item.question}
                              </h3>
                              <span class="text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide ${this.getCategoryColor(item.category)}">
                                ${item.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="ml-4">
                          <svg
                            class="w-6 h-6 transition-transform duration-300 ${this.openItems.has(index) ? 'rotate-180' : ''
      }"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </button>

                    <!-- Answer Content -->
                    <div
                      id="answer-${index}"
                      class="overflow-hidden transition-all duration-500 ease-in-out ${this.openItems.has(index)
        ? 'max-h-96 opacity-100'
        : 'max-h-0 opacity-0'
      }"
                    >
                      <div class="px-6 pb-6 pt-2">
                        <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 border-l-4 border-blue-500 shadow-sm">
                          <p class="text-gray-700 leading-relaxed text-base mb-4">
                            ${item.answer}
                          </p>
                          
                          <!-- Additional Help Section -->
                          <div class="pt-4 border-t border-gray-200">
                            <div class="flex items-center justify-between">
                              <span class="text-sm text-gray-500 font-medium">Was this helpful?</span>
                              <div class="flex space-x-3">
                                <button class="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium hover:bg-blue-50 px-2 py-1 rounded">
                                  👍 Yes
                                </button>
                                <button class="text-sm text-gray-600 hover:text-gray-700 transition-colors duration-200 font-medium hover:bg-gray-50 px-2 py-1 rounded">
                                  👎 No
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `)}
            </div>

            <!-- Footer -->
            <div class="mt-12 text-center">
              <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 shadow-sm">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">
                  Still have questions?
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed">
                  Can't find what you're looking for? Reach out to our support team.
                </p>
                <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
