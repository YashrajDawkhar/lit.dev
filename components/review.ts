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
      padding: 40px 20px;
      background: #f5f5f5;
      min-height: 100vh;
    }

    .reviews-container {
      background: white;
      border-radius: 8px;
      padding: 40px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      border: 1px solid #e0e0e0;
    }

    .reviews-title {
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
      margin-bottom: 40px;
      color: #333;
    }

    .review-item {
      background: #fafafa;
      border-radius: 8px;
      margin-bottom: 20px;
      padding: 24px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.2s ease;
      border: 1px solid #e8e8e8;
    }

    .review-item:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    .review-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .reviewer-name {
      font-weight: 600;
      color: #333;
      font-size: 1.2rem;
    }

    .rating {
      font-size: 1.2rem;
      color: #ffa500;
    }

    .review-text {
      line-height: 1.6;
      margin-bottom: 16px;
      color: #555;
      font-size: 1rem;
    }

    .review-date {
      font-size: 0.9rem;
      color: #777;
      text-align: right;
      font-weight: 400;
    }

    .reviews-summary {
      text-align: center;
      margin-bottom: 32px;
      padding: 24px;
      background: #f8f8f8;
      border-radius: 8px;
      color: #333;
      border: 1px solid #e0e0e0;
    }

    .average-rating {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 12px;
      color: #333;
    }

    .total-reviews {
      font-size: 1rem;
      color: #666;
      font-weight: 400;
    }

    .star-gold {
      color: #ffa500;
    }

    .star-empty {
      color: #ddd;
    }

    @media (max-width: 768px) {
      :host {
        padding: 20px 10px;
      }
      
      .reviews-container {
        padding: 24px;
      }
      
      .reviews-title {
        font-size: 2rem;
      }
      
      .review-item {
        padding: 20px;
      }
    }
  `;

  @property({ type: Array })
  reviews: Review[] = [
    {
      reviewerName: "Yash",
      rating: 5,
      reviewText: "This is an amazing product! The quality exceeded my expectations and the customer service was outstanding. Highly recommend!",
      reviewDate: "December 15, 2024"
    },
    {
      reviewerName: "Sarah Johnson",
      rating: 4,
      reviewText: "Really good product overall. Easy to use and well-designed. Only minor issue was the delivery took a bit longer than expected.",
      reviewDate: "December 12, 2024"
    },
    {
      reviewerName: "Mike Chen",
      rating: 5,
      reviewText: "Fantastic! This has made my workflow so much more efficient. The features are exactly what I needed.",
      reviewDate: "December 10, 2024"
    },
    {
      reviewerName: "Emily Davis",
      rating: 4.5,
      reviewText: "Great value for money. The interface is intuitive and the performance is solid. Would definitely buy again.",
      reviewDate: "December 8, 2024"
    },
    {
      reviewerName: "Alex Rodriguez",
      rating: 3,
      reviewText: "It's okay, does what it's supposed to do. Could use some improvements in the user interface, but overall functional.",
      reviewDate: "December 5, 2024"
    }
  ];

  private renderStars(rating: number): any {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return html`
      ${Array(fullStars).fill(0).map(() => html`<span class="star-gold">★</span>`)}
      ${hasHalfStar ? html`<span class="star-gold">☆</span>` : ''}
      ${Array(emptyStars).fill(0).map(() => html`<span class="star-empty">☆</span>`)}
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
      <div class="reviews-container">
        <h2 class="reviews-title">Customer Reviews</h2>
        
        <div class="reviews-summary">
          <div class="average-rating">
            ${this.renderStars(averageRating)} ${averageRating}/5
          </div>
          <div class="total-reviews">
            Based on ${this.reviews.length} review${this.reviews.length !== 1 ? 's' : ''}
          </div>
        </div>

        ${this.reviews.map(review => html`
          <div class="review-item">
            <div class="review-header">
              <span class="reviewer-name">${review.reviewerName}</span>
              <span class="rating">${this.renderStars(review.rating)}</span>
            </div>
            <div class="review-text">${review.reviewText}</div>
            <div class="review-date">Posted on ${review.reviewDate}</div>
          </div>
        `)}
      </div>
    `;
  }
}