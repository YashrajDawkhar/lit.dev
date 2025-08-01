import { html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwindMixin.js";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  tags?: string[];
  helpfulCount?: number;
  isPopular?: boolean;
}

@customElement("faq-component")
export class FAQComponent extends TailwindElement {
  @state()
  private openItems: Set<number> = new Set();

  @state()
  private searchQuery = "";

  @state()
  private selectedCategory = "All";

  @state()
  private helpfulVotes: Map<number, boolean> = new Map();

  private faqData: FAQItem[] = [
    {
      question: "What is Lit and how does it work?",
      answer: "Lit is a simple library for building fast, lightweight web components. It uses modern web standards like Custom Elements, Shadow DOM, and HTML templates. Lit provides a declarative template system with efficient updates through its reactive update cycle, making it perfect for creating reusable components.",
      category: "Basics",
      tags: ["fundamentals", "overview", "web-components"],
      helpfulCount: 45,
      isPopular: true
    },
    {
      question: "How do I get started with Lit components?",
      answer: "To get started with Lit: 1) Install Lit via npm (`npm install lit`), 2) Create a class that extends LitElement, 3) Use the @customElement decorator to define your tag name, 4) Define your template in the render() method using the `html` template function, 5) Add reactive properties with @property or @state decorators.",
      category: "Getting Started",
      tags: ["installation", "setup", "tutorial"],
      helpfulCount: 38,
      isPopular: true
    },
    {
      question: "Can I use Lit with other frameworks?",
      answer: "Absolutely! Lit components are standard web components, which means they work seamlessly with any framework including React, Vue, Angular, or vanilla JavaScript. They're framework-agnostic and can be used as drop-in components in any web application.",
      category: "Integration",
      tags: ["compatibility", "frameworks", "interoperability"],
      helpfulCount: 29
    },
    {
      question: "What are the performance benefits of Lit?",
      answer: "Lit offers several performance advantages: efficient updates through its reactive update cycle that only re-renders changed parts, small bundle size (around 5KB gzipped), leverages browser-native features like Shadow DOM for encapsulation, and minimal runtime overhead compared to larger frameworks.",
      category: "Performance",
      tags: ["optimization", "speed", "bundle-size"],
      helpfulCount: 33
    },
    {
      question: "How do I handle events in Lit components?",
      answer: "You can handle events in Lit using: 1) Event binding in templates with @click syntax, 2) Adding event listeners in connectedCallback(), 3) Dispatching custom events with this.dispatchEvent(), 4) Using event delegation for dynamic content. Lit also supports event listener options and automatic cleanup.",
      category: "Events",
      tags: ["event-handling", "interaction", "custom-events"],
      helpfulCount: 26
    },
    {
      question: "How do I style Lit components?",
      answer: "Lit components can be styled using: 1) Static styles property with css template literal, 2) Adoptable stylesheets for sharing styles, 3) CSS custom properties for theming, 4) External stylesheets, 5) Styled with CSS-in-JS libraries. Shadow DOM provides style encapsulation by default.",
      category: "Styling",
      tags: ["css", "styling", "theming"],
      helpfulCount: 22
    },
    {
      question: "What's the difference between @property and @state?",
      answer: "@property decorators create reactive properties that can be set from outside the component and are typically reflected as attributes. @state decorators create internal reactive state that triggers re-renders but aren't intended to be set from outside the component.",
      category: "Basics",
      tags: ["properties", "state", "reactivity"],
      helpfulCount: 31
    },
    {
      question: "How do I test Lit components?",
      answer: "Lit components can be tested using standard web testing tools: 1) Unit testing with frameworks like Jest or Mocha, 2) @web/test-runner for browser-based testing, 3) Testing Library for user-focused testing, 4) Puppeteer or Playwright for e2e testing. Lit provides testing utilities for common scenarios.",
      category: "Testing",
      tags: ["testing", "unit-tests", "e2e"],
      helpfulCount: 19
    }
  ];

  static styles = css`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideDown {
      from {
        max-height: 0;
        opacity: 0;
      }
      to {
        max-height: 500px;
        opacity: 1;
      }
    }

    .faq-item {
      animation: fadeIn 0.5s ease-out;
    }

    .answer-content {
      animation: slideDown 0.3s ease-out;
    }

    .search-highlight {
      background-color: #fef3c7;
      padding: 0 2px;
      border-radius: 2px;
    }
  `;

  private get categories() {
    const cats = [...new Set(this.faqData.map(item => item.category))];
    return ["All", ...cats];
  }

  private get filteredFAQs() {
    let filtered = this.faqData;

    // Filter by category
    if (this.selectedCategory !== "All") {
      filtered = filtered.filter(item => item.category === this.selectedCategory);
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }

  private toggleItem(index: number) {
    if (this.openItems.has(index)) {
      this.openItems.delete(index);
    } else {
      this.openItems.add(index);
    }
    this.requestUpdate();
  }

  private handleSearch(e: Event) {
    this.searchQuery = (e.target as HTMLInputElement).value;
  }

  private clearSearch() {
    this.searchQuery = "";
  }

  private handleHelpfulVote(index: number, isHelpful: boolean) {
    this.helpfulVotes.set(index, isHelpful);
    this.requestUpdate();
  }

  private getCategoryColor(category: string): string {
    const colors = {
      "Basics": "bg-blue-100 text-blue-800 border-blue-200",
      "Getting Started": "bg-green-100 text-green-800 border-green-200",
      "Integration": "bg-purple-100 text-purple-800 border-purple-200",
      "Performance": "bg-orange-100 text-orange-800 border-orange-200",
      "Events": "bg-pink-100 text-pink-800 border-pink-200",
      "Styling": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "Testing": "bg-yellow-100 text-yellow-800 border-yellow-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200";
  }

  private highlightSearchTerm(text: string): string {
    if (!this.searchQuery.trim()) return text;

    const regex = new RegExp(`(${this.searchQuery})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
  }

  private expandAll() {
    this.filteredFAQs.forEach((_, index) => {
      this.openItems.add(index);
    });
    this.requestUpdate();
  }

  private collapseAll() {
    this.openItems.clear();
    this.requestUpdate();
  }

  render() {
    const filteredFAQs = this.filteredFAQs;
    const popularFAQs = this.faqData.filter(item => item.isPopular);

    return html`
      <div class="min-h-screen bg-gray-50 py-8 px-4">
        <div class="max-w-5xl mx-auto">
          <!-- Header Section -->
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-lg mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about Lit and web components. Search or browse by category to quickly find what you need.
            </p>
          </div>

          <!-- Popular Questions (if no search/filter) -->
          ${this.searchQuery === "" && this.selectedCategory === "All" ? html`
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg class="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                Most Popular
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${popularFAQs.slice(0, 4).map(item => html`
                  <div class="bg-white p-4 rounded-xl border-2 border-yellow-200 hover:border-yellow-300 transition-colors cursor-pointer"
                       @click=${() => {
        const index = this.faqData.indexOf(item);
        this.toggleItem(index);
      }}>
                    <h3 class="font-semibold text-gray-800 text-sm mb-2">${item.question}</h3>
                    <div class="flex items-center justify-between">
                      <span class="text-xs px-2 py-1 rounded-full border ${this.getCategoryColor(item.category)}">
                        ${item.category}
                      </span>
                      <span class="text-xs text-gray-500 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                        </svg>
                        ${item.helpfulCount}
                      </span>
                    </div>
                  </div>
                `)}
              </div>
            </div>
          ` : ''}

          <!-- Search and Filter Section -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 mb-8">
            <div class="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <!-- Search Bar -->
              <div class="flex-1 relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  class="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-xl text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                  placeholder="Search questions, answers, or tags..."
                  .value=${this.searchQuery}
                  @input=${this.handleSearch}
                />
                ${this.searchQuery ? html`
                  <button
                    class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                    @click=${this.clearSearch}
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                ` : ''}
              </div>

              <!-- Category Filter -->
              <div class="flex flex-wrap gap-2">
                ${this.categories.map(category => html`
                  <button
                    class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${this.selectedCategory === category
          ? 'bg-blue-600 text-white shadow-md'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300'
        }"
                    @click=${() => this.selectedCategory = category}
                  >
                    ${category}
                  </button>
                `)}
              </div>
            </div>

            <!-- Results Summary and Controls -->
            <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <span class="text-gray-600 font-medium">
                ${filteredFAQs.length} question${filteredFAQs.length !== 1 ? 's' : ''} 
                ${this.searchQuery || this.selectedCategory !== "All" ? 'found' : 'available'}
              </span>
              <div class="flex gap-2">
                <button
                  class="text-sm text-blue-600 hover:text-blue-700 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
                  @click=${this.expandAll}
                >
                  Expand All
                </button>
                <button
                  class="text-sm text-gray-600 hover:text-gray-700 font-medium px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors"
                  @click=${this.collapseAll}
                >
                  Collapse All
                </button>
              </div>
            </div>
          </div>

          <!-- FAQ Items -->
          <div class="space-y-4">
            ${filteredFAQs.length === 0 ? html`
              <div class="text-center py-12">
                <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">No questions found</h3>
                <p class="text-gray-600">Try adjusting your search or category filter.</p>
              </div>
            ` : ''}

            ${filteredFAQs.map((item, index) => {
          const originalIndex = this.faqData.indexOf(item);
          const isOpen = this.openItems.has(originalIndex);
          const userVote = this.helpfulVotes.get(originalIndex);

          return html`
                <div class="faq-item bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
                     style="animation-delay: ${index * 0.1}s">
                  <!-- Question Header -->
                  <button
                    class="w-full p-6 text-left transition-all duration-200 hover:bg-gray-50 ${isOpen ? 'bg-blue-50 border-b-2 border-blue-100' : ''}"
                    @click=${() => this.toggleItem(originalIndex)}
                    aria-expanded="${isOpen}"
                  >
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex-1">
                        <div class="flex items-center gap-3 mb-2">
                          <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                            ${index + 1}
                          </div>
                          ${item.isPopular ? html`
                            <span class="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full border border-yellow-200">
                              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                              Popular
                            </span>
                          ` : ''}
                          <span class="text-xs px-3 py-1 rounded-full border font-medium ${this.getCategoryColor(item.category)}">
                            ${item.category}
                          </span>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2" .innerHTML=${this.highlightSearchTerm(item.question)}></h3>
                        ${item.tags ? html`
                          <div class="flex flex-wrap gap-2">
                            ${item.tags.map(tag => html`
                              <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">#${tag}</span>
                            `)}
                          </div>
                        ` : ''}
                      </div>
                      <div class="flex flex-col items-center gap-2">
                        <svg
                          class="w-6 h-6 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                        ${item.helpfulCount ? html`
                          <span class="text-xs text-gray-500 flex items-center gap-1">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                            </svg>
                            ${item.helpfulCount}
                          </span>
                        ` : ''}
                      </div>
                    </div>
                  </button>

                  <!-- Answer Content -->
                  ${isOpen ? html`
                    <div class="answer-content border-t border-gray-100">
                      <div class="p-6">
                        <div class="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-4">
                          <p class="text-gray-700 leading-relaxed text-base mb-0" .innerHTML=${this.highlightSearchTerm(item.answer)}></p>
                        </div>

                        <!-- Helpful Section -->
                        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                          <span class="text-sm font-medium text-gray-600">Was this helpful?</span>
                          <div class="flex gap-3">
                            <button
                              class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${userVote === true
                ? 'bg-green-100 text-green-700 border border-green-300'
                : 'text-gray-600 hover:bg-green-50 hover:text-green-700 border border-gray-200'
              }"
                              @click=${() => this.handleHelpfulVote(originalIndex, true)}
                            >
                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                              </svg>
                              Yes
                            </button>
                            <button
                              class="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${userVote === false
                ? 'bg-red-100 text-red-700 border border-red-300'
                : 'text-gray-600 hover:bg-red-50 hover:text-red-700 border border-gray-200'
              }"
                              @click=${() => this.handleHelpfulVote(originalIndex, false)}
                            >
                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path>
                              </svg>
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ` : ''}
                </div>
              `;
        })}
          </div>

          <!-- Contact Support Section -->
          <div class="mt-12 bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 text-center">
            <div class="max-w-2xl mx-auto">
              <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Can't find what you're looking for? Our support team is here to help you get the answers you need.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Contact Support
                </button>
                <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 border border-gray-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
