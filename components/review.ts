import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwindMixin.js";

interface Review {
  reviewerName: string;
  rating: number;
  reviewText: string;
  reviewDate: string;
}

@customElement("review-component")
export class ReviewComponent extends TailwindElement {
  @property({ type: Array })
  reviews: Review[] = [
    {
      reviewerName: "Yash",
      rating: 5,
      reviewText:
        "This is an amazing product! The quality exceeded my expectations and the customer service was outstanding. Highly recommend!",
      reviewDate: "December 15, 2024",
    },
    {
      reviewerName: "Sarah Johnson",
      rating: 4,
      reviewText:
        "Really good product overall. Easy to use and well-designed. Only minor issue was the delivery took a bit longer than expected.",
      reviewDate: "December 12, 2024",
    },
    {
      reviewerName: "Mike Chen",
      rating: 5,
      reviewText:
        "Fantastic! This has made my workflow so much more efficient. The features are exactly what I needed.",
      reviewDate: "December 10, 2024",
    },
    {
      reviewerName: "Emily Davis",
      rating: 4.5,
      reviewText:
        "Great value for money. The interface is intuitive and the performance is solid. Would definitely buy again.",
      reviewDate: "December 8, 2024",
    },
    {
      reviewerName: "Alex Rodriguez",
      rating: 3,
      reviewText:
        "It's okay, does what it's supposed to do. Could use some improvements in the user interface, but overall functional.",
      reviewDate: "December 5, 2024",
    },
  ];

  // Render stars, including support for half stars using a CSS overlay trick
  private renderStars(rating: number) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return html`
      ${Array(fullStars)
        .fill(0)
        .map(
          () =>
            html`<span class="text-yellow-400 text-xl" aria-hidden="true">★</span>`
        )}
      ${halfStar
        ? html`<span class="relative text-yellow-400 text-xl" aria-hidden="true">
            <span class="absolute left-0 top-0 w-1/2 overflow-hidden">★</span>
            <span class="text-gray-300">☆</span>
          </span>`
        : ""}
      ${Array(emptyStars)
        .fill(0)
        .map(
          () =>
            html`<span class="text-gray-300 text-xl" aria-hidden="true">☆</span>`
        )}
      <span class="sr-only">Rating: ${rating} out of 5 stars</span>
    `;
  }

  private getAverageRating(): number {
    if (this.reviews.length === 0) return 0;
    const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    return Math.round((sum / this.reviews.length) * 10) / 10;
  }

  render() {
    const averageRating = this.getAverageRating();

    return html`
      <div class="block font-sans max-w-4xl mx-auto p-12 md:p-8 bg-gradient-to-br from-slate-50 to-white min-h-screen text-gray-700">
        <section class="bg-white rounded-xl p-12 md:p-8 shadow-lg border-0" role="region" aria-label="Customer Reviews">
          <h2 class="text-5xl md:text-3xl font-bold text-center mb-12 md:mb-10 text-gray-900 tracking-wide">Customer Reviews</h2>

          <div class="bg-gray-50 rounded-lg p-8 md:p-6 text-gray-600 border border-gray-200 mb-12 md:mb-10 shadow-inner" aria-live="polite">
            <div class="text-3xl md:text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
              ${this.renderStars(averageRating)} <span>${averageRating}/5</span>
            </div>
            <div class="text-base text-gray-600 font-medium text-center">
              Based on ${this.reviews.length} review${this.reviews.length !== 1 ? "s" : ""}
            </div>
          </div>

          ${this.reviews.map(
            (review) => html`
              <article class="bg-white rounded-xl mb-7 md:mb-6 p-9 md:p-7 shadow-md border-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default" tabindex="0" aria-label="Review by ${review.reviewerName}">
                <div class="flex justify-between items-center mb-5">
                  <span class="font-bold text-gray-800 text-xl">${review.reviewerName}</span>
                  <span class="text-xl text-yellow-400 flex gap-1" aria-label="Rating: ${review.rating} out of 5 stars">
                    ${this.renderStars(review.rating)}
                  </span>
                </div>
                <p class="leading-relaxed mb-5 text-gray-600 text-lg tracking-wide">${review.reviewText}</p>
                <div class="text-sm text-gray-500 text-right font-normal italic">Posted on ${review.reviewDate}</div>
              </article>
            `
          )}
        </section>
      </div>
    `;
  }
}
