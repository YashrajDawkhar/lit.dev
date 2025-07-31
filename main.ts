import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./my-header";

@customElement("my-greeting")
export class MyGreeting extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      background-color: #111;
      color: #0f0;
      font-family: sans-serif;
    }
  `;

  render() {
    return html`<my-header></my-header> <h1>Hello from Lit! 👋</h1>`;
  }
}

@customElement("review-component")
export class ReviewComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      border: 1px solid #333;
      border-radius: 8px;
      margin: 8px 0;
      background-color: #222;
      color: #fff;
      font-family: sans-serif;
    }

    .review-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .reviewer-name {
      font-weight: bold;
      color: #0f0;
    }

    .rating {
      color: #ffd700;
    }

    .review-text {
      line-height: 1.5;
      margin-bottom: 8px;
    }

    .review-date {
      font-size: 0.9em;
      color: #888;
    }
  `;

  @property({ type: String, attribute: "reviewer-name" })
  reviewerName: string = "Yash";

  @property({ type: Number })
  rating: number = 4;

  @property({ type: String, attribute: "review-text" })
  reviewText: string =
    "This is a great product! I really enjoyed using it and would recommend it to others.";

  @property({ type: String, attribute: "review-date" })
  reviewDate: string = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  private renderStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      "★".repeat(fullStars) + (hasHalfStar ? "☆" : "") + "☆".repeat(emptyStars)
    );
  }

  render() {
    return html`
      <div class="review-header">
        <span class="reviewer-name">${this.reviewerName}</span>
        <span class="rating">${this.renderStars(this.rating)}</span>
      </div>
      <div class="review-text">${this.reviewText}</div>
      <div class="review-date">Posted on ${this.reviewDate}</div>
    `;
  }
}


@customElement("faq-component")
export class FAQComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .faq-container {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .faq-title {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 32px;
      color: #2c3e50;
    }

    .faq-item {
      background: white;
      border-radius: 8px;
      margin-bottom: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .faq-item:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .faq-question {
      padding: 20px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white;
      border: none;
      width: 100%;
      text-align: left;
      font-size: 1.1rem;
      font-weight: 600;
      color: #2c3e50;
      transition: background-color 0.3s ease;
    }

    .faq-question:hover {
      background-color: #f8f9fa;
    }

    .faq-question.active {
      background-color: #e3f2fd;
      color: #1976d2;
    }

    .faq-icon {
      font-size: 1.2rem;
      transition: transform 0.3s ease;
      color: #1976d2;
    }

    .faq-icon.rotated {
      transform: rotate(180deg);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
      background: #fafafa;
    }

    .faq-answer.open {
      max-height: 200px;
      padding: 20px;
    }

    .faq-answer-text {
      color: #555;
      line-height: 1.6;
      font-size: 1rem;
    }
  `;

  @property({ type: Object })
  private openItems: Set<number> = new Set();

  private faqData = [
    {
      question: "What is Lit and how does it work?",
      answer: "Lit is a simple library for building fast, lightweight web components. It uses modern web standards and provides a declarative template system with efficient updates."
    },
    {
      question: "How do I get started with Lit components?",
      answer: "To get started, install Lit via npm, create a class that extends LitElement, use the @customElement decorator, and define your template in the render() method."
    },
    {
      question: "Can I use Lit with other frameworks?",
      answer: "Yes! Lit components are standard web components, so they work with any framework or vanilla JavaScript. They're framework-agnostic and interoperable."
    },
    {
      question: "What are the performance benefits of Lit?",
      answer: "Lit provides efficient updates through its reactive update cycle, small bundle size, and leverages browser-native features like Shadow DOM for encapsulation."
    },
    {
      question: "How do I handle events in Lit components?",
      answer: "You can handle events using the @event syntax in templates, or by adding event listeners in the connectedCallback() lifecycle method."
    }
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
      <div class="faq-container">
        <h2 class="faq-title">Frequently Asked Questions</h2>
        ${this.faqData.map((item, index) => html`
          <div class="faq-item">
            <button 
              class="faq-question ${this.openItems.has(index) ? 'active' : ''}"
              @click=${() => this.toggleItem(index)}
            >
              <span>${item.question}</span>
              <span class="faq-icon ${this.openItems.has(index) ? 'rotated' : ''}">▼</span>
            </button>
            <div class="faq-answer ${this.openItems.has(index) ? 'open' : ''}">
              <div class="faq-answer-text">${item.answer}</div>
            </div>
          </div>
        `)}
      </div>
    `;
  }
}

