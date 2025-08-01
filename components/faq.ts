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
    },
    {
      question: "How do I get started with Lit components?",
      answer:
        "To get started, install Lit via npm, create a class that extends LitElement, use the @customElement decorator, and define your template in the render() method.",
    },
    {
      question: "Can I use Lit with other frameworks?",
      answer:
        "Yes! Lit components are standard web components, so they work with any framework or vanilla JavaScript. They're framework-agnostic and interoperable.",
    },
    {
      question: "What are the performance benefits of Lit?",
      answer:
        "Lit provides efficient updates through its reactive update cycle, small bundle size, and leverages browser-native features like Shadow DOM for encapsulation.",
    },
    {
      question: "How do I handle events in Lit components?",
      answer:
        "You can handle events using the @event syntax in templates, or by adding event listeners in the connectedCallback() lifecycle method.",
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

  render() {
    return html`
      <div class="block font-sans max-w-3xl mx-auto p-5">
        <div class="bg-gray-50 rounded-xl p-6 shadow-md">
          <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
          ${this.faqData.map(
            (item, index) => html`
              <div class="bg-white rounded-lg mb-4 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                <button
                  class="p-5 cursor-pointer flex justify-between items-center bg-white border-none w-full text-left text-lg font-semibold text-gray-800 transition-colors duration-300 hover:bg-gray-50 ${this.openItems.has(index)
                    ? "bg-blue-50 text-blue-700"
                    : ""}"
                  @click=${() => this.toggleItem(index)}
                >
                  <span>${item.question}</span>
                  <span
                    class="text-xl transition-transform duration-300 text-blue-700 ${this.openItems.has(index) ? "rotate-180" : ""}"
                    >▼</span
                  >
                </button>
                <div
                  class="max-h-0 overflow-hidden transition-all duration-300 bg-gray-50 ${this.openItems.has(index) ? "max-h-48 p-5" : ""}"
                >
                  <div class="text-gray-600 leading-relaxed text-base">${item.answer}</div>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
