import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Review {
  reviewerName: string;
  rating: number;
  reviewText: string;
  reviewDate: string;
}

@customElement("review-component")
export class ReviewComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 50px 30px;
      background: linear-gradient(135deg, #f0f3f8, #ffffff);
      min-height: 100vh;
      color: #444;
    }

    .reviews-container {
      background: white;
      border-radius: 12px;
      padding: 40px 50px;
      box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.05),
        0 2px 12px rgba(0, 0, 0, 0.07);
      border: none;
    }

    .reviews-title {
      font-size: 2.75rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 50px;
      color: #222;
      letter-spacing: 0.04em;
    }

    .reviews-summary {
      background: #fafafa;
      border-radius: 10px;
      padding: 30px 40px;
      color: #555;
      border: 1px solid #ddd;
      margin-bottom: 48px;
      box-shadow: inset 0 0 8px #ececec;
    }

    .average-rating {
      font-size: 2rem;
      font-weight: 700;
      color: #2a2a2a;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .total-reviews {
      font-size: 1rem;
      color: #666;
      font-weight: 500;
    }

    .review-item {
      background: #fff;
      border-radius: 12px;
      margin-bottom: 28px;
      padding: 28px 36px;
      box-shadow:
        0 3px 8px rgba(0, 0, 0, 0.06);
      border: none;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
      cursor: default;
    }

    .review-item:hover {
      box-shadow:
        0 8px 24px rgba(0, 0, 0, 0.12);
      transform: translateY(-4px);
    }

    .review-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
    }

    .reviewer-name {
      font-weight: 700;
      color: #2c2c2c;
      font-size: 1.3rem;
    }

    .rating {
      font-size: 1.3rem;
      color: #ffb400;
      display: flex;
      gap: 2px;
    }

    .review-text {
      line-height: 1.7;
      margin-bottom: 20px;
      color: #565656;
      font-size: 1.05rem;
      letter-spacing: 0.01em;
    }

    .review-date {
      font-size: 0.9rem;
      color: #999;
      text-align: right;
      font-weight: 400;
      font-style: italic;
    }

    .star {
      font-size: 1.3rem;
      text-shadow: 0 0 2px #d99e00;
      transition: color 0.3s ease;
    }

    .star-gold {
      color: #ffb400;
    }
    .star-empty {
      color: #ececec;
    }
   
    /* Half star using a Unicode trick: a half filled star is not standard,
       so we use an SVG or CSS trick - here we use a span with a gradient mask */
    .star-half {
      position: relative;
      color: #ffb400;
    }
    .star-half::before {
      content: "★";
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      overflow: hidden;
      color: #ffb400;
      z-index: 1;
      -webkit-text-stroke: 0;
    }
    .star-half::after {
      content: "☆";
      color: #ececec;
    }

    @media (max-width: 768px) {
      :host {
        padding: 30px 16px;
      }

      .reviews-container {
        padding: 30px;
      }

      .reviews-title {
        font-size: 2rem;
        margin-bottom: 38px;
      }

      .review-item {
        padding: 24px 28px;
        margin-bottom: 24px;
      }

      .average-rating {
        font-size: 1.6rem;
      }
    }
  `;

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
            html`<span class="star star-gold" aria-hidden="true">★</span>`
        )}
      ${halfStar
        ? html`<span class="star star-half" aria-hidden="true">★</span>`
        : ""}
      ${Array(emptyStars)
        .fill(0)
        .map(
          () =>
            html`<span class="star star-empty" aria-hidden="true">☆</span>`
        )}
      <span class="visually-hidden">Rating: ${rating} out of 5 stars</span>
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
      <section class="reviews-container" role="region" aria-label="Customer Reviews">
        <h2 class="reviews-title">Customer Reviews</h2>

        <div class="reviews-summary" aria-live="polite">
          <div class="average-rating">
            ${this.renderStars(averageRating)} <span>${averageRating}/5</span>
          </div>
          <div class="total-reviews">
            Based on ${this.reviews.length} review${this.reviews.length !== 1 ? "s" : ""}
          </div>
        </div>

        ${this.reviews.map(
          (review) => html`
            <article class="review-item" tabindex="0" aria-label="Review by ${review.reviewerName}">
              <div class="review-header">
                <span class="reviewer-name">${review.reviewerName}</span>
                <span class="rating" aria-label="Rating: ${review.rating} out of 5 stars">
                  ${this.renderStars(review.rating)}
                </span>
              </div>
              <p class="review-text">${review.reviewText}</p>
              <div class="review-date">Posted on ${review.reviewDate}</div>
            </article>
          `
        )}
      </section>
    `;
  }
}
