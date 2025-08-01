import { LitElement, html, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";

@customElement("product-image-slider")
export class ProductImageSlider extends LitElement {
    static styles = css`
        :host {
            display: block;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            padding: 20px 0;
        }

        .notification-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }

        .product-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: start;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .image-section {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .main-image-container {
            position: relative;
            width: 100%;
            aspect-ratio: 1;
            border-radius: 20px;
            overflow: hidden;
            background: linear-gradient(145deg, #f0f4ff, #e6f3ff);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .main-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .main-image:hover {
            transform: scale(1.08);
        }

        .thumbnail-container {
            display: flex;
            gap: 12px;
            overflow-x: auto;
            padding: 8px 0;
            scrollbar-width: thin;
            scrollbar-color: #cbd5e1 transparent;
        }

        .thumbnail-container::-webkit-scrollbar {
            height: 6px;
        }

        .thumbnail-container::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 3px;
        }

        .thumbnail-container::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 3px;
        }

        .thumbnail {
            flex-shrink: 0;
            width: 90px;
            height: 90px;
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            border: 3px solid transparent;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            background: white;
        }

        .thumbnail.active {
            border-color: #8b5cf6;
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
            transform: translateY(-2px);
        }

        .thumbnail:hover {
            border-color: #a78bfa;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
        }

        .thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .thumbnail:hover img {
            transform: scale(1.1);
        }

        .product-info {
            padding: 20px 0;
        }

        .product-title {
            font-size: 28px;
            font-weight: 700;
            background: linear-gradient(135deg, #1e293b, #475569);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
            line-height: 1.2;
        }

        .price-container {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
            padding: 15px;
            background: linear-gradient(135deg, #f8fafc, #f1f5f9);
            border-radius: 16px;
            border: 1px solid #e2e8f0;
        }

        .current-price {
            font-size: 24px;
            font-weight: 800;
            background: linear-gradient(135deg, #059669, #10b981);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .original-price {
            font-size: 18px;
            color: #94a3b8;
            text-decoration: line-through;
            font-weight: 500;
        }

        .rating-container {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 30px;
            padding: 12px 16px;
            background: linear-gradient(135deg, #fef3c7, #fde68a);
            border-radius: 12px;
            border: 1px solid #f59e0b;
        }

        .stars {
            display: flex;
            gap: 3px;
        }

        .star {
            width: 18px;
            height: 18px;
            color: #f59e0b;
            filter: drop-shadow(0 2px 4px rgba(245, 158, 11, 0.3));
        }

        .rating-text {
            font-size: 15px;
            color: #92400e;
            font-weight: 600;
        }



        .product-details {
            border-top: 2px solid #e2e8f0;
            padding-top: 25px;
            background: linear-gradient(135deg, #f8fafc, #f1f5f9);
            border-radius: 16px;
            padding: 20px;
            margin-top: 20px;
        }

        .detail-section {
            margin-bottom: 20px;
        }

        .detail-section:last-child {
            margin-bottom: 0;
        }

        .detail-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 20px;
            cursor: pointer;
            font-weight: 600;
            color: #374151;
            background: white;
            border-radius: 12px;
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .detail-header:hover {
            color: #1f2937;
            background: linear-gradient(135deg, #f8fafc, #f1f5f9);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .detail-content {
            padding: 20px;
            color: #64748b;
            font-size: 15px;
            line-height: 1.6;
            display: none;
            background: white;
            border-radius: 0 0 12px 12px;
            margin-top: 2px;
            border: 1px solid #e2e8f0;
            border-top: none;
        }

        .detail-content.open {
            display: block;
            animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .chevron {
            width: 18px;
            height: 18px;
            transition: transform 0.3s ease;
            color: #8b5cf6;
        }

        .chevron.rotated {
            transform: rotate(180deg);
        }

        @media (max-width: 768px) {
            .product-container {
                grid-template-columns: 1fr;
                gap: 30px;
                padding: 20px;
                margin: 10px;
            }

            .product-title {
                font-size: 24px;
            }

            .current-price {
                font-size: 20px;
            }

            .thumbnail {
                width: 70px;
                height: 70px;
            }
        }
    `;

    @state()
    private activeImageIndex = 0;

    @state()
    private openDetails: Set<string> = new Set();

    @state()
    private showAddedProductUI = false;

    @state()
    private addedProductData: any = null;

    private images = [
        'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop&crop=face'
    ];

    private selectImage(index: number) {
        this.activeImageIndex = index;
    }

    private toggleDetail(detail: string) {
        if (this.openDetails.has(detail)) {
            this.openDetails.delete(detail);
        } else {
            this.openDetails.add(detail);
        }
        this.requestUpdate();
    }

    private handleProductAdded(event: CustomEvent) {
        this.addedProductData = event.detail;
        this.showAddedProductUI = true;
        
        // Auto-hide after 8 seconds (increased time)
        this.autoHideTimer = setTimeout(() => {
            if (this.showAddedProductUI) {
                this.showAddedProductUI = false;
            }
        }, 8000);
    }

    private autoHideTimer: ReturnType<typeof setTimeout> | null = null;

    private handleNotificationMouseEnter() {
        // Clear auto-hide timer when user hovers
        if (this.autoHideTimer) {
            clearTimeout(this.autoHideTimer);
            this.autoHideTimer = null;
        }
    }

    private handleNotificationMouseLeave() {
        // Restart auto-hide timer when user stops hovering
        if (this.showAddedProductUI) {
            this.autoHideTimer = setTimeout(() => {
                this.showAddedProductUI = false;
            }, 3000); // Shorter delay after user stops hovering
        }
    }

    private handleCloseNotification() {
        this.showAddedProductUI = false;
    }

    private handleViewCart() {
        console.log('Navigate to cart page');
        // Add navigation logic here
    }

    private handleContinueShopping() {
        this.showAddedProductUI = false;
    }



    render() {
        return html`
            <div class="product-container">
                <div class="image-section">
                    <div class="main-image-container">
                        <img 
                            class="main-image" 
                            src="${this.images[this.activeImageIndex]}" 
                            alt="Product image"
                        />
                    </div>
                    <div class="thumbnail-container">
                        ${this.images.map((image, index) => html`
                            <div 
                                class="thumbnail ${index === this.activeImageIndex ? 'active' : ''}"
                                @click="${() => this.selectImage(index)}"
                            >
                                <img src="${image}" alt="Product thumbnail ${index + 1}" />
                            </div>
                        `)}
                    </div>
                </div>

                <div class="product-info">
                    <h1 class="product-title">Ottercat Cowboy Baby Toy</h1>
                    
                    <div class="price-container">
                        <span class="current-price">$1,299.00</span>
                        <span class="original-price">$2,099.00</span>
                    </div>

                    <div class="rating-container">
                        <div class="stars">
                            ${Array(5).fill(0).map((_) => html`
                                <svg class="star" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            `)}
                        </div>
                        <span class="rating-text">4.8 (128 reviews)</span>
                    </div>

                    <add-to-cart-button 
                        product-id="ottercat-cowboy-toy"
                        product-name="Ottercat Cowboy Baby Toy"
                        price="1299.00"
                        quantity="1"
                        @product-added="${this.handleProductAdded}"
                    ></add-to-cart-button>

                    <div class="product-details">
                        <div class="detail-section">
                            <div class="detail-header" @click="${() => this.toggleDetail('description')}">
                                <span>Description</span>
                                <svg class="chevron ${this.openDetails.has('description') ? 'rotated' : ''}" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div class="detail-content ${this.openDetails.has('description') ? 'open' : ''}">
                                This adorable cowboy-themed baby toy features soft, safe materials and engaging textures perfect for little hands. Designed to stimulate sensory development while providing hours of fun.
                            </div>
                        </div>

                        <div class="detail-section">
                            <div class="detail-header" @click="${() => this.toggleDetail('specs')}">
                                <span>Pairs well with</span>
                                <svg class="chevron ${this.openDetails.has('specs') ? 'rotated' : ''}" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div class="detail-content ${this.openDetails.has('specs') ? 'open' : ''}">
                                • Baby play mats and activity gyms<br>
                                • Other themed character toys<br>
                                • Soft building blocks<br>
                                • Musical toys and rattles
                            </div>
                        </div>
                                         </div>
                 </div>
             </div>

             <div class="notification-container">
                 <added-product-ui
                     ?show="${this.showAddedProductUI}"
                    .productId="${this.addedProductData?.productId || ''}"
                    .productName="${this.addedProductData?.productName || ''}"
                    .productImage="${this.images[0]}"
                    .price="${this.addedProductData?.price || 0}"
                    .quantity="${this.addedProductData?.quantity || 1}"
                    .cartTotal="${(this.addedProductData?.price || 0) * (this.addedProductData?.quantity || 1)}"
                    .cartItemCount="${this.addedProductData?.quantity || 1}"
                    @close="${this.handleCloseNotification}"
                    @view-cart="${this.handleViewCart}"
                    @continue-shopping="${this.handleContinueShopping}"
                    @mouseenter="${this.handleNotificationMouseEnter}"
                    @mouseleave="${this.handleNotificationMouseLeave}"
                ></added-product-ui>
             </div>
         `;
     }
}

@customElement("add-to-cart-button")
export class AddToCartButton extends LitElement {
    static styles = css`
        :host {
            display: block;
        }

        .add-to-cart-btn {
            width: 100%;
            padding: 18px 24px;
            background: linear-gradient(135deg, #8b5cf6, #a855f7);
            color: white;
            border: none;
            border-radius: 16px;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            margin-bottom: 25px;
            box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
            position: relative;
            overflow: hidden;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .add-to-cart-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .add-to-cart-btn:hover::before {
            left: 100%;
        }

        .add-to-cart-btn:hover {
            background: linear-gradient(135deg, #7c3aed, #9333ea);
            transform: translateY(-2px);
            box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4);
        }

        .add-to-cart-btn:active {
            transform: translateY(0);
        }

        .add-to-cart-btn:disabled {
            background: linear-gradient(135deg, #9ca3af, #6b7280);
            cursor: not-allowed;
            transform: none;
            box-shadow: 0 4px 12px rgba(156, 163, 175, 0.3);
        }

        .add-to-cart-btn:disabled:hover {
            transform: none;
            box-shadow: 0 4px 12px rgba(156, 163, 175, 0.3);
        }

        .add-to-cart-btn:disabled::before {
            display: none;
        }

        .loading {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .spinner {
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top: 2px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .success {
            background: linear-gradient(135deg, #059669, #10b981) !important;
        }

        .success:hover {
            background: linear-gradient(135deg, #047857, #059669) !important;
        }

        @media (max-width: 768px) {
            .add-to-cart-btn {
                padding: 16px 20px;
                font-size: 16px;
            }
        }
    `;

    @state()
    private isLoading = false;

    @state()
    private isSuccess = false;

    @state()
    private isDisabled = false;

    @property({ type: String })
    productId = '';

    @property({ type: String })
    productName = '';

    @property({ type: Number })
    price = 0;

    @property({ type: Number })
    quantity = 1;

    private async handleAddToCart() {
        if (this.isLoading || this.isDisabled) return;

        this.isLoading = true;
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Add to cart logic here
            console.log('Added to cart:', {
                productId: this.productId,
                productName: this.productName,
                price: this.price,
                quantity: this.quantity
            });

            this.isSuccess = true;
            
            // Dispatch event to show added product UI
            this.dispatchEvent(new CustomEvent('product-added', {
                detail: {
                    productId: this.productId,
                    productName: this.productName,
                    price: this.price,
                    quantity: this.quantity
                }
            }));
            
            // Reset success state after 2 seconds
            setTimeout(() => {
                this.isSuccess = false;
            }, 2000);

        } catch (error) {
            console.error('Failed to add to cart:', error);
        } finally {
            this.isLoading = false;
        }
    }

    render() {
        const buttonText = this.isSuccess 
            ? 'Added to Cart! ✓' 
            : this.isLoading 
                ? html`<span class="loading">Adding... <div class="spinner"></div></span>`
                : 'Add to Cart';

        return html`
            <button 
                class="add-to-cart-btn ${this.isSuccess ? 'success' : ''}"
                @click="${this.handleAddToCart}"
                ?disabled="${this.isLoading || this.isDisabled}"
            >
                ${buttonText}
            </button>
        `;
    }
}

@customElement("added-product-ui")
export class AddedProductUI extends LitElement {
    static styles = css`
        :host {
            display: block;
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .notification {
            background: linear-gradient(135deg, #059669, #10b981);
            color: white;
            padding: 20px;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(5, 150, 105, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            max-width: 350px;
            animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            cursor: default;
        }

        .notification::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #34d399, #6ee7b7, #34d399);
            animation: shimmer 2s linear infinite;
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100%) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
        }

        .header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 15px;
        }

        .success-icon {
            width: 24px;
            height: 24px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        .title {
            font-size: 16px;
            font-weight: 700;
            margin: 0;
        }

        .product-info {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-bottom: 15px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
        }

        .product-image {
            width: 50px;
            height: 50px;
            border-radius: 8px;
            object-fit: cover;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .product-details {
            flex: 1;
        }

        .product-name {
            font-size: 14px;
            font-weight: 600;
            margin: 0 0 4px 0;
            line-height: 1.3;
        }

        .product-price {
            font-size: 13px;
            opacity: 0.9;
            margin: 0;
        }

        .actions {
            display: flex;
            gap: 8px;
        }

        .btn {
            flex: 1;
            padding: 10px 16px;
            border: none;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            text-align: center;
            display: inline-block;
        }

        .btn-primary {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .btn-primary:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-1px);
        }

        .btn-secondary {
            background: transparent;
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-1px);
        }

        .close-btn {
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .close-btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
        }

        .cart-summary {
            margin-top: 12px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            font-size: 13px;
        }

        .cart-summary-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 4px;
        }

        .cart-summary-row:last-child {
            margin-bottom: 0;
            font-weight: 600;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            padding-top: 8px;
            margin-top: 8px;
        }

        @media (max-width: 768px) {
            :host {
                top: 10px;
                right: 10px;
                left: 10px;
            }

            .notification {
                max-width: none;
            }
        }
    `;

    @property({ type: String })
    productId = '';

    @property({ type: String })
    productName = '';

    @property({ type: String })
    productImage = '';

    @property({ type: Number })
    price = 0;

    @property({ type: Number })
    quantity = 1;

    @property({ type: Boolean })
    show = false;

    @property({ type: Number })
    cartTotal = 0;

    @property({ type: Number })
    cartItemCount = 0;

    private handleClose() {
        this.show = false;
        this.dispatchEvent(new CustomEvent('close'));
    }

    private handleViewCart() {
        // Navigate to cart page or open cart modal
        console.log('Navigate to cart');
        this.dispatchEvent(new CustomEvent('view-cart'));
    }

    private handleContinueShopping() {
        this.show = false;
        this.dispatchEvent(new CustomEvent('continue-shopping'));
    }

    render() {
        if (!this.show) return html``;

        return html`
            <div class="notification">
                <button class="close-btn" @click="${this.handleClose}">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                </button>

                <div class="header">
                    <div class="success-icon">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <h3 class="title">Added to Cart!</h3>
                </div>

                <div class="product-info">
                    <img 
                        class="product-image" 
                        src="${this.productImage}" 
                        alt="${this.productName}"
                        @error="${(e: Event) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=100&h=100&fit=crop';
                        }}"
                    />
                    <div class="product-details">
                        <p class="product-name">${this.productName}</p>
                        <p class="product-price">$${this.price.toFixed(2)} × ${this.quantity}</p>
                    </div>
                </div>

                <div class="cart-summary">
                    <div class="cart-summary-row">
                        <span>Items in cart:</span>
                        <span>${this.cartItemCount}</span>
                    </div>
                    <div class="cart-summary-row">
                        <span>Subtotal:</span>
                        <span>$${this.cartTotal.toFixed(2)}</span>
                    </div>
                </div>

                <div class="actions">
                    <button class="btn btn-secondary" @click="${this.handleContinueShopping}">
                        Continue Shopping
                    </button>
                    <button class="btn btn-primary" @click="${this.handleViewCart}">
                        View Cart
                    </button>
                </div>
            </div>
        `;
    }
}
