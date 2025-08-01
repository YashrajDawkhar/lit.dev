import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwindMixin.js";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  images: string[];
  imageAlts?: string[];
}

@customElement("product-component")
export class ProductComponent extends TailwindElement {
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

  private addToCart() {
    // Dispatch custom event for product-image-slider to catch
    this.dispatchEvent(new CustomEvent('product-added', {
      detail: {
        productId: this.product.id,
        productName: this.product.title,
        productImage: this.product.images[0],
        price: parseFloat(this.product.price.replace('$', '')),
        quantity: 1,
        cartItemCount: 1, // This would come from actual cart state
        cartTotal: parseFloat(this.product.price.replace('$', ''))
      },
      bubbles: true,
      composed: true
    }));
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
      <div class="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 max-w-sm mx-auto animate-fadeIn">
        <div class="relative w-full h-64 rounded-lg overflow-hidden mb-4">
          <div 
            class="relative w-full h-full flex transition-transform duration-300 ease-out"
            style="transform: translateX(-${this.currentImageIndex * 100}%)"
          >
            ${this.product.images.map((image, index) => html`
              <img
                src="${image}"
                alt="${this.product.imageAlts?.[index] || this.product.title}"
                class="w-full h-full object-cover cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105"
                @click=${() => this.openImageFullscreen(index)}
              />
            `)}
          </div>
          
          ${this.product.images.length > 1 ? html`
            <button 
              class="absolute top-1/2 left-2.5 -translate-y-1/2 bg-white/80 hover:bg-white/95 border-0 rounded-full w-10 h-10 cursor-pointer flex items-center justify-center text-xl font-bold text-slate-700 transition-all duration-300 hover:scale-110 z-10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white/80"
              @click=${this.prevImage}
              ?disabled=${this.currentImageIndex === 0}
            >
              ‹
            </button>
            <button 
              class="absolute top-1/2 right-2.5 -translate-y-1/2 bg-white/80 hover:bg-white/95 border-0 rounded-full w-10 h-10 cursor-pointer flex items-center justify-center text-xl font-bold text-slate-700 transition-all duration-300 hover:scale-110 z-10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white/80"
              @click=${this.nextImage}
              ?disabled=${this.currentImageIndex === this.product.images.length - 1}
            >
              ›
            </button>
            
            <div class="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              ${this.product.images.map((_, index) => html`
                <div 
                  class="w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${index === this.currentImageIndex ? 'bg-white/90 scale-125' : 'bg-white/50'}"
                  @click=${() => this.goToImage(index)}
                ></div>
              `)}
            </div>
          ` : ''}
        </div>
        
        <h3 class="text-2xl font-bold text-slate-700 mb-2 leading-tight">${this.product.title}</h3>
        
        <p class="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">${this.product.description}</p>
        
        <div class="text-xl font-bold text-red-500 mb-4">${this.product.price}</div>
        
        <div class="flex gap-3">
          <button 
            class="flex-1 py-3 px-6 border-0 rounded-md text-base font-semibold cursor-pointer transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600 hover:-translate-y-0.5"
            @click=${this.addToCart}
          >
            Add to Cart
          </button>
          <button class="flex-1 py-3 px-6 border-2 border-gray-300 rounded-md text-base font-semibold cursor-pointer transition-all duration-300 bg-gray-100 text-slate-700 hover:bg-gray-200 hover:border-gray-400">
            View Details
          </button>
        </div>
      </div>

      <div 
        class="fixed top-0 left-0 w-screen h-screen bg-black/90 flex items-center justify-center z-[1000] transition-all duration-300 ${this.isFullscreenOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}"
        @click=${this.handleOverlayClick}
      >
        <button 
          class="absolute top-5 right-5 bg-white/20 hover:bg-white/30 border-0 text-white text-3xl w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-300"
          @click=${this.closeFullscreen}
        >
          ×
        </button>
        <img
          src="${currentImage}"
          alt="${currentImageAlt}"
          class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg transition-transform duration-300 ${this.isFullscreenOpen ? 'scale-100' : 'scale-80'}"
        />
      </div>

      <style>
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
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      </style>
    `;
  }
}
