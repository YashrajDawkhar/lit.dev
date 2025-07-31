import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  images: string[];
  imageAlts?: string[];
}

@customElement("product-component")
export class ProductComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .product-card {
      background: #ffffff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      max-width: 400px;
      margin: 0 auto;
    }

    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .image-slider {
      position: relative;
      width: 100%;
      height: 250px;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 16px;
    }

    .slider-container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      transition: transform 0.3s ease;
    }

    .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      flex-shrink: 0;
      transition: transform 0.3s ease;
    }

    .product-image:hover {
      transform: scale(1.02);
    }

    .slider-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.8);
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      font-weight: bold;
      color: #2c3e50;
      transition: all 0.3s ease;
      z-index: 2;
    }

    .slider-nav:hover {
      background: rgba(255, 255, 255, 0.95);
      transform: translateY(-50%) scale(1.1);
    }

    .slider-nav.prev {
      left: 10px;
    }

    .slider-nav.next {
      right: 10px;
    }

    .slider-nav:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .slider-nav:disabled:hover {
      transform: translateY(-50%) scale(1);
      background: rgba(255, 255, 255, 0.8);
    }

    .slider-dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 2;
    }

    .slider-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .slider-dot.active {
      background: rgba(255, 255, 255, 0.9);
      transform: scale(1.2);
    }

    .product-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2c3e50;
      margin: 16px 0 8px 0;
      line-height: 1.3;
    }

    .product-description {
      color: #666;
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .product-price {
      font-size: 1.25rem;
      font-weight: bold;
      color: #e74c3c;
      margin-bottom: 16px;
    }

    .product-actions {
      display: flex;
      gap: 12px;
    }

    .btn {
      padding: 12px 24px;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      flex: 1;
    }

    .btn-primary {
      background: #3498db;
      color: white;
    }

    .btn-primary:hover {
      background: #2980b9;
      transform: translateY(-1px);
    }

    .btn-secondary {
      background: #ecf0f1;
      color: #2c3e50;
      border: 2px solid #bdc3c7;
    }

    .btn-secondary:hover {
      background: #d5dbdb;
      border-color: #95a5a6;
    }

    .fullscreen-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .fullscreen-overlay.open {
      opacity: 1;
      visibility: visible;
    }

    .fullscreen-image {
      max-width: 90vw;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 8px;
      transform: scale(0.8);
      transition: transform 0.3s ease;
    }

    .fullscreen-overlay.open .fullscreen-image {
      transform: scale(1);
    }

    .close-button {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: white;
      font-size: 2rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s ease;
    }

    .close-button:hover {
      background: rgba(255, 255, 255, 0.3);
    }

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

    .product-card {
      animation: fadeIn 0.5s ease forwards;
    }
  `;

  @property({ type: Object })
  product: Product = {
    id: "1",
    title: "Premium Wireless Headphones",
    description: "Experience crystal-clear audio with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for music lovers and professionals.",
    price: "$199.99",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=250&fit=crop"
    ],
    imageAlts: ["Premium wireless headphones", "Headphones side view", "Headphones detail", "Headphones in use"]
  };

  @state()
  private isFullscreenOpen = false;

  @state()
  private currentImageIndex = 0;

  private openFullscreen() {
    this.isFullscreenOpen = true;
    document.body.style.overflow = 'hidden';
  }

  private closeFullscreen() {
    this.isFullscreenOpen = false;
    document.body.style.overflow = '';
  }

  private handleOverlayClick(e: Event) {
    if (e.target === e.currentTarget) {
      this.closeFullscreen();
    }
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.isFullscreenOpen) {
      this.closeFullscreen();
    }
  };

  private nextImage() {
    if (this.currentImageIndex < this.product.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  private prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  private goToImage(index: number) {
    this.currentImageIndex = index;
  }

  private openImageFullscreen(index: number) {
    this.currentImageIndex = index;
    this.openFullscreen();
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this.handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = '';
  }

  render() {
    const currentImage = this.product.images[this.currentImageIndex];
    const currentImageAlt = this.product.imageAlts?.[this.currentImageIndex] || this.product.title;

    return html`
      <div class="product-card">
        <div class="image-slider">
          <div 
            class="slider-container" 
            style="transform: translateX(-${this.currentImageIndex * 100}%)"
          >
            ${this.product.images.map((image, index) => html`
              <img
                src="${image}"
                alt="${this.product.imageAlts?.[index] || this.product.title}"
                class="product-image"
                @click=${() => this.openImageFullscreen(index)}
              />
            `)}
          </div>
          
          ${this.product.images.length > 1 ? html`
            <button 
              class="slider-nav prev" 
              @click=${this.prevImage}
              ?disabled=${this.currentImageIndex === 0}
            >
              ‹
            </button>
            <button 
              class="slider-nav next" 
              @click=${this.nextImage}
              ?disabled=${this.currentImageIndex === this.product.images.length - 1}
            >
              ›
            </button>
            
            <div class="slider-dots">
              ${this.product.images.map((_, index) => html`
                <div 
                  class="slider-dot ${index === this.currentImageIndex ? 'active' : ''}"
                  @click=${() => this.goToImage(index)}
                ></div>
              `)}
            </div>
          ` : ''}
        </div>
        
        <h3 class="product-title">${this.product.title}</h3>
        
        <p class="product-description">${this.product.description}</p>
        
        <div class="product-price">${this.product.price}</div>
        
        <div class="product-actions">
          <button class="btn btn-primary">Add to Cart</button>
          <button class="btn btn-secondary">View Details</button>
        </div>
      </div>

      <div 
        class="fullscreen-overlay ${this.isFullscreenOpen ? 'open' : ''}"
        @click=${this.handleOverlayClick}
      >
        <button class="close-button" @click=${this.closeFullscreen}>×</button>
        <img
          src="${currentImage}"
          alt="${currentImageAlt}"
          class="fullscreen-image"
        />
      </div>
    `;
  }
}
