import { html } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwindMixin.js";

@customElement("product-image-slider")
export class ProductImageSlider extends TailwindElement {
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
        
        this.autoHideTimer = setTimeout(() => {
            if (this.showAddedProductUI) {
                this.showAddedProductUI = false;
            }
        }, 8000);
    }

    private autoHideTimer: ReturnType<typeof setTimeout> | null = null;

    private handleNotificationMouseEnter() {
        if (this.autoHideTimer) {
            clearTimeout(this.autoHideTimer);
            this.autoHideTimer = null;
        }
    }

    private handleNotificationMouseLeave() {
        if (this.showAddedProductUI) {
            this.autoHideTimer = setTimeout(() => {
                this.showAddedProductUI = false;
            }, 3000);
        }
    }

    private handleCloseNotification() {
        this.showAddedProductUI = false;
    }

    private handleViewCart() {
        console.log('Navigate to cart page');
    }

    private handleContinueShopping() {
        this.showAddedProductUI = false;
    }

    render() {
        return html`
            <div class="max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white rounded-3xl shadow-lg border border-gray-100">
                <div class="flex flex-col gap-5">
                    <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-md border border-gray-200 group">
                        <img 
                            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                            src="${this.images[this.activeImageIndex]}" 
                            alt="Product image"
                        />
                    </div>
                    <div class="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 p-2">
                        ${this.images.map((image, index) => html`
                            <div 
                                class="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden cursor-pointer border-3 transition-all duration-300 ease-out shadow-md bg-white hover:border-purple-400 hover:shadow-lg hover:-translate-y-1 ${index === this.activeImageIndex ? 'border-purple-500 shadow-lg -translate-y-1' : 'border-gray-200'}"
                                @click="${() => this.selectImage(index)}"
                            >
                                <img class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" src="${image}" alt="Product thumbnail ${index + 1}" />
                            </div>
                        `)}
                    </div>
                </div>

                <div class="py-5">
                    <h1 class="text-3xl font-bold text-gray-800 mb-5 leading-tight">Ottercat Cowboy Baby Toy</h1>
                    
                    <div class="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                        <span class="text-2xl font-bold text-green-600">$1,299.00</span>
                        <span class="text-lg text-gray-400 line-through font-medium">$2,099.00</span>
                    </div>

                    <div class="flex items-center gap-3 mb-8 p-3 bg-yellow-50 rounded-xl border border-yellow-200">
                        <div class="flex gap-1">
                            ${Array(5).fill(0).map((_) => html`
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            `)}
                        </div>
                        <span class="text-yellow-700 font-semibold">4.8 (128 reviews)</span>
                    </div>

                    <add-to-cart-button 
                        product-id="ottercat-cowboy-toy"
                        product-name="Ottercat Cowboy Baby Toy"
                        price="1299.00"
                        quantity="1"
                        @product-added="${this.handleProductAdded}"
                    ></add-to-cart-button>

                    <div class="border-t-2 border-gray-200 pt-6 bg-gray-50 rounded-2xl p-5 mt-5">
                        <div class="mb-5">
                            <div class="flex justify-between items-center p-4 cursor-pointer font-semibold text-gray-700 bg-white rounded-xl transition-all duration-300 ease-out border border-gray-200 shadow-sm hover:text-gray-900 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md" @click="${() => this.toggleDetail('description')}">
                                <span>Description</span>
                                <svg class="w-5 h-5 transition-transform duration-300 ease-out text-purple-500 ${this.openDetails.has('description') ? 'rotate-180' : ''}" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div class="p-5 text-gray-600 text-sm leading-relaxed bg-white rounded-b-xl mt-0.5 border border-gray-200 border-t-0 ${this.openDetails.has('description') ? 'block animate-in slide-in-from-top-2 duration-300' : 'hidden'}">
                                This adorable cowboy-themed baby toy features soft, safe materials and engaging textures perfect for little hands. Designed to stimulate sensory development while providing hours of fun.
                            </div>
                        </div>

                        <div class="mb-0">
                            <div class="flex justify-between items-center p-4 cursor-pointer font-semibold text-gray-700 bg-white rounded-xl transition-all duration-300 ease-out border border-gray-200 shadow-sm hover:text-gray-900 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md" @click="${() => this.toggleDetail('specs')}">
                                <span>Pairs well with</span>
                                <svg class="w-5 h-5 transition-transform duration-300 ease-out text-purple-500 ${this.openDetails.has('specs') ? 'rotate-180' : ''}" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div class="p-5 text-gray-600 text-sm leading-relaxed bg-white rounded-b-xl mt-0.5 border border-gray-200 border-t-0 ${this.openDetails.has('specs') ? 'block animate-in slide-in-from-top-2 duration-300' : 'hidden'}">
                                • Baby play mats and activity gyms<br>
                                • Other themed character toys<br>
                                • Soft building blocks<br>
                                • Musical toys and rattles
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fixed top-5 right-5 z-50">
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
export class AddToCartButton extends TailwindElement {
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
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            console.log('Added to cart:', {
                productId: this.productId,
                productName: this.productName,
                price: this.price,
                quantity: this.quantity
            });

            this.isSuccess = true;
            
            this.dispatchEvent(new CustomEvent('product-added', {
                detail: {
                    productId: this.productId,
                    productName: this.productName,
                    price: this.price,
                    quantity: this.quantity
                }
            }));
            
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
                ? html`<span class="flex items-center gap-2">Adding... <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div></span>`
                : 'Add to Cart';

        return html`
            <button 
                class="w-full py-5 px-6 bg-purple-600 hover:bg-purple-700 text-white border-none rounded-2xl text-lg font-bold cursor-pointer transition-all duration-300 ease-out mb-6 shadow-lg relative overflow-hidden font-sans hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none ${this.isSuccess ? 'bg-green-600 hover:bg-green-700' : ''}"
                @click="${this.handleAddToCart}"
                ?disabled="${this.isLoading || this.isDisabled}"
            >
                <span class="relative z-10">${buttonText}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-500 hover:translate-x-full"></div>
            </button>
        `;
    }
}

@customElement("added-product-ui")
export class AddedProductUI extends TailwindElement {
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
            <div class="fixed top-5 right-5 left-5 md:left-auto z-50 font-sans">
                <div class="bg-green-600 text-white p-5 rounded-2xl shadow-xl border border-green-500 max-w-sm mx-auto md:mx-0 animate-in slide-in-from-right-full scale-in-95 duration-500 ease-out relative overflow-hidden cursor-default">
                    <div class="absolute top-0 left-0 right-0 h-1 bg-green-400 animate-pulse"></div>
                    
                    <button class="absolute top-3 right-3 bg-white/20 border-none rounded-full w-6 h-6 cursor-pointer flex items-center justify-center transition-all duration-300 ease-out hover:bg-white/30 hover:scale-110" @click="${this.handleClose}">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                    </button>

                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <h3 class="text-base font-bold m-0">Added to Cart!</h3>
                    </div>

                    <div class="flex gap-3 items-center mb-4 p-3 bg-white/10 rounded-xl">
                        <img 
                            class="w-12 h-12 rounded-lg object-cover border-2 border-white/30" 
                            src="${this.productImage}" 
                            alt="${this.productName}"
                            @error="${(e: Event) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=100&h=100&fit=crop';
                            }}"
                        />
                        <div class="flex-1">
                            <p class="text-sm font-semibold m-0 mb-1 leading-tight">${this.productName}</p>
                            <p class="text-xs opacity-90 m-0">$${this.price.toFixed(2)} × ${this.quantity}</p>
                        </div>
                    </div>

                    <div class="mb-4 p-3 bg-white/10 rounded-lg text-xs">
                        <div class="flex justify-between mb-1">
                            <span>Items in cart:</span>
                            <span>${this.cartItemCount}</span>
                        </div>
                        <div class="flex justify-between font-semibold border-t border-white/20 pt-2 mt-2">
                            <span>Subtotal:</span>
                            <span>$${this.cartTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <div class="flex gap-2">
                        <button class="flex-1 py-2.5 px-4 border border-white/30 bg-transparent text-white rounded-lg text-xs font-semibold cursor-pointer transition-all duration-300 ease-out hover:bg-white/10 hover:-translate-y-0.5" @click="${this.handleContinueShopping}">
                            Continue Shopping
                        </button>
                        <button class="flex-1 py-2.5 px-4 bg-white/20 text-white border border-white/30 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-300 ease-out hover:bg-white/30 hover:-translate-y-0.5" @click="${this.handleViewCart}">
                            View Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}
