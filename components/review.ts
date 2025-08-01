import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwindMixin.js";

interface Review {
  reviewerName: string;
  rating: number;
  reviewText: string;
  reviewDate: string;
  isVerified?: boolean;
  helpfulCount?: number;
}

@customElement("review-component")
export class ReviewComponent extends TailwindElement {
  @property({ type: Array })
  reviews: Review[] = [
    {
      reviewerName: "Yash",
      rating: 5,
      reviewText: "This is an amazing product! The quality exceeded my expectations and the customer service was outstanding. Highly recommend to anyone looking for reliability and excellence!",
      reviewDate: "December 15, 2024",
      isVerified: true,
      helpfulCount: 12
    },
    {
      reviewerName: "Sarah Johnson",
      rating: 4,
      reviewText: "Really good product overall. Easy to use and well-designed. Only minor issue was the delivery took a bit longer than expected, but the quality makes up for it.",
      reviewDate: "December 12, 2024",
      isVerified: true,
      helpfulCount: 8
    },
    {
      reviewerName: "Mike Chen",
      rating: 5,
      reviewText: "Fantastic! This has made my workflow so much more efficient. The features are exactly what I needed and the interface is intuitive.",
      reviewDate: "December 10, 2024",
      isVerified: false,
      helpfulCount: 15
    },
    {
      reviewerName: "Emily Davis",
      rating: 4.5,
      reviewText: "Great value for money. The interface is intuitive and the performance is solid. Would definitely buy again and recommend to colleagues.",
      reviewDate: "December 8, 2024",
      isVerified: true,
      helpfulCount: 6
    },
    {
      reviewerName: "Alex Rodriguez",
      rating: 3,
      reviewText: "It's okay, does what it's supposed to do. Could use some improvements in the user interface, but overall functional and meets basic needs.",
      reviewDate: "December 5, 2024",
      isVerified: false,
      helpfulCount: 3
    },
  ];

  @state()
  private sortBy: 'newest' | 'oldest' | 'highest' | 'lowest' = 'newest';

  @state()
  private filterRating: number | null = null;

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

    .review-card {
      animation: fadeIn 0.5s ease-out;
    }

    .star-filled {
      color: #fbbf24;
    }

    .star-empty {
      color: #d1d5db;
    }

    .progress-bar {
      background: linear-gradient(to right, #fbbf24 var(--fill-width, 0%), #e5e7eb var(--fill-width, 0%));
    }
  `;

  private renderStars(rating: number, size: 'sm' | 'md' | 'lg' = 'md') {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-lg',
      lg: 'text-2xl'
    };

    return html`
      <div class="flex items-center gap-0.5">
        ${Array(fullStars).fill(0).map(() => html`
          <svg class="${sizeClasses[size]} star-filled" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        `)}
        
        ${hasHalfStar ? html`
          <div class="relative">
            <svg class="${sizeClasses[size]} star-empty" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <div class="absolute top-0 left-0 overflow-hidden w-1/2">
              <svg class="${sizeClasses[size]} star-filled" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
        ` : ''}

        ${Array(emptyStars).fill(0).map(() => html`
          <svg class="${sizeClasses[size]} star-empty" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        `)}
      </div>
    `;
  }

  private getAverageRating(): number {
    if (this.reviews.length === 0) return 0;
    const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    return Math.round((sum / this.reviews.length) * 10) / 10;
  }

  private getRatingDistribution() {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    this.reviews.forEach(review => {
      const roundedRating = Math.round(review.rating);
      distribution[roundedRating as keyof typeof distribution]++;
    });
    return distribution;
  }

  private get sortedAndFilteredReviews() {
    let filtered = this.reviews;

    // Apply rating filter
    if (this.filterRating !== null) {
      filtered = filtered.filter(review => Math.round(review.rating) === this.filterRating);
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      switch (this.sortBy) {
        case 'newest':
          return new Date(b.reviewDate).getTime() - new Date(a.reviewDate).getTime();
        case 'oldest':
          return new Date(a.reviewDate).getTime() - new Date(b.reviewDate).getTime();
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        default:
          return 0;
      }
    });
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  render() {
    const averageRating = this.getAverageRating();
    const distribution = this.getRatingDistribution();
    const filteredReviews = this.sortedAndFilteredReviews;

    return html`
      <div class="min-h-screen bg-white py-8 px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Customer Reviews</h1>
            <p class="text-gray-600 text-lg">See what our customers are saying about their experience</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Rating Summary -->
            <div class="lg:col-span-1">
              <div class="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 sticky top-8">
                <!-- Overall Rating -->
                <div class="text-center mb-6">
                  <div class="text-5xl font-bold text-gray-800 mb-2">${averageRating}</div>
                  <div class="mb-3">
                    ${this.renderStars(averageRating, 'lg')}
                  </div>
                  <p class="text-gray-600 font-medium">
                    Based on ${this.reviews.length} review${this.reviews.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <!-- Rating Distribution -->
                <div class="space-y-3">
                  ${[5, 4, 3, 2, 1].map(rating => {
      const count = distribution[rating as keyof typeof distribution];
      const percentage = this.reviews.length > 0 ? (count / this.reviews.length) * 100 : 0;

      return html`
                      <div class="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                           @click=${() => this.filterRating = this.filterRating === rating ? null : rating}>
                        <span class="text-sm font-medium text-gray-600 w-8">${rating}</span>
                        <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            class="h-full bg-yellow-400 transition-all duration-500"
                            style="width: ${percentage}%"
                          ></div>
                        </div>
                        <span class="text-sm text-gray-500 w-8">${count}</span>
                      </div>
                    `;
    })}
                </div>

                <!-- Active Filter -->
                ${this.filterRating ? html`
                  <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-blue-800">Showing ${this.filterRating}-star reviews</span>
                      <button 
                        class="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        @click=${() => this.filterRating = null}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>

            <!-- Reviews List -->
            <div class="lg:col-span-2">
              <!-- Sort Controls -->
              <div class="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span class="font-medium text-gray-700">
                  ${filteredReviews.length} review${filteredReviews.length !== 1 ? 's' : ''}
                </span>
                <div class="flex items-center gap-2">
                  <label class="text-sm font-medium text-gray-600">Sort by:</label>
                  <select 
                    class="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                    .value=${this.sortBy}
                    @change=${(e: Event) => this.sortBy = (e.target as HTMLSelectElement).value as any}
                  >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                    <option value="highest">Highest rated</option>
                    <option value="lowest">Lowest rated</option>
                  </select>
                </div>
              </div>

              <!-- Reviews -->
              <div class="space-y-6">
                ${filteredReviews.length === 0 ? html`
                  <div class="text-center py-12">
                    <div class="text-gray-400 mb-4">
                      <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <p class="text-gray-500 text-lg">No reviews match your current filter.</p>
                  </div>
                ` : ''}

                ${filteredReviews.map((review, index) => html`
                  <article 
                    class="review-card bg-white rounded-2xl p-6 shadow-md border-2 border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1"
                    style="animation-delay: ${index * 0.1}s"
                  >
                    <!-- Reviewer Header -->
                    <div class="flex items-start justify-between mb-4">
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <span class="text-white font-bold text-lg">
                            ${review.reviewerName.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div class="flex items-center gap-2">
                            <h3 class="font-bold text-gray-800 text-lg">${review.reviewerName}</h3>
                            ${review.isVerified ? html`
                              <span class="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Verified
                              </span>
                            ` : ''}
                          </div>
                          <div class="flex items-center gap-2 mt-1">
                            ${this.renderStars(review.rating, 'sm')}
                            <span class="text-sm text-gray-500">${review.rating}/5</span>
                          </div>
                        </div>
                      </div>
                      <time class="text-sm text-gray-500 whitespace-nowrap">
                        ${this.formatDate(review.reviewDate)}
                      </time>
                    </div>

                    <!-- Review Text -->
                    <p class="text-gray-700 leading-relaxed mb-4 text-base">
                      ${review.reviewText}
                    </p>

                    <!-- Review Actions -->
                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div class="flex items-center gap-4">
                        <button class="flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm transition-colors">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L9 6v4m-2 8H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                          </svg>
                          Helpful (${review.helpfulCount || 0})
                        </button>
                        <button class="text-gray-500 hover:text-red-600 text-sm transition-colors">
                          Report
                        </button>
                      </div>
                    </div>
                  </article>
                `)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
