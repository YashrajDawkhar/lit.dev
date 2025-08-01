import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwindMixin.js";

@customElement("gallery-component")
export class GalleryComponent extends TailwindElement {
  @property({ type: Array })
  images = [
    {
      src: "https://picsum.photos/800/600?random=1",
      thumb: "https://picsum.photos/400/300?random=1",
      title: "Beautiful Landscape",
      description: "A stunning view of mountains and valleys with morning mist",
      category: "Nature"
    },
    {
      src: "https://picsum.photos/800/600?random=2",
      thumb: "https://picsum.photos/400/300?random=2",
      title: "City Skyline",
      description: "Modern architecture against the evening sky with city lights",
      category: "Urban"
    },
    {
      src: "https://picsum.photos/800/600?random=3",
      thumb: "https://picsum.photos/400/300?random=3",
      title: "Ocean Waves",
      description: "Peaceful waves crashing on the shore during golden hour",
      category: "Nature"
    },
    {
      src: "https://picsum.photos/800/600?random=4",
      thumb: "https://picsum.photos/400/300?random=4",
      title: "Forest Path",
      description: "A winding path through ancient trees in autumn colors",
      category: "Nature"
    },
    {
      src: "https://picsum.photos/800/600?random=5",
      thumb: "https://picsum.photos/400/300?random=5",
      title: "Desert Sunset",
      description: "Golden hour in the vast desert with dramatic clouds",
      category: "Landscape"
    },
    {
      src: "https://picsum.photos/800/600?random=6",
      thumb: "https://picsum.photos/400/300?random=6",
      title: "Mountain Peak",
      description: "Snow-capped peaks reaching for the sky in winter",
      category: "Landscape"
    },
    {
      src: "https://picsum.photos/800/600?random=7",
      thumb: "https://picsum.photos/400/300?random=7",
      title: "Urban Architecture",
      description: "Contemporary building design with geometric patterns",
      category: "Urban"
    },
    {
      src: "https://picsum.photos/800/600?random=8",
      thumb: "https://picsum.photos/400/300?random=8",
      title: "Tropical Beach",
      description: "Crystal clear waters and white sand under palm trees",
      category: "Nature"
    }
  ];

  @state()
  private selectedImageIndex = -1;

  @state()
  private isModalOpen = false;

  @state()
  private loadingImages: Set<number> = new Set();

  @state()
  private errorImages: Set<number> = new Set();

  @state()
  private selectedCategory = "All";

  static styles = css`
    @keyframes modalFadeIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes imageSlideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .modal-content {
      animation: modalFadeIn 0.3s ease-out;
    }

    .image-card {
      animation: imageSlideIn 0.5s ease-out;
    }

    .image-loading {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }

    @keyframes loading {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
  `;

  private get categories() {
    const cats = [...new Set(this.images.map(img => img.category))];
    return ["All", ...cats];
  }

  private get filteredImages() {
    if (this.selectedCategory === "All") {
      return this.images;
    }
    return this.images.filter(img => img.category === this.selectedCategory);
  }

  private openModal(index: number) {
    const filteredIndex = this.filteredImages.findIndex((_, i) => i === index);
    const originalIndex = this.images.findIndex(img => img === this.filteredImages[filteredIndex]);
    this.selectedImageIndex = originalIndex;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  private closeModal() {
    this.isModalOpen = false;
    this.selectedImageIndex = -1;
    document.body.style.overflow = '';
  }

  private navigateModal(direction: 'prev' | 'next') {
    if (direction === 'prev') {
      this.selectedImageIndex = this.selectedImageIndex > 0 
        ? this.selectedImageIndex - 1 
        : this.images.length - 1;
    } else {
      this.selectedImageIndex = this.selectedImageIndex < this.images.length - 1 
        ? this.selectedImageIndex + 1 
        : 0;
    }
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (!this.isModalOpen) return;
    
    switch (e.key) {
      case 'Escape':
        this.closeModal();
        break;
      case 'ArrowLeft':
        this.navigateModal('prev');
        break;
      case 'ArrowRight':
        this.navigateModal('next');
        break;
    }
  };

  private handleImageLoad(index: number) {
    this.loadingImages.delete(index);
    this.requestUpdate();
  }

  private handleImageError(index: number) {
    this.loadingImages.delete(index);
    this.errorImages.add(index);
    this.requestUpdate();
  }

  private handleImageLoadStart(index: number) {
    this.loadingImages.add(index);
    this.requestUpdate();
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
    const currentImage = this.selectedImageIndex >= 0 ? this.images[this.selectedImageIndex] : null;
    
    return html`
      <div class="min-h-screen bg-gray-50 py-8 px-4">
        <div class="max-w-7xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Photo Gallery</h1>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our curated collection of stunning photography from around the world
            </p>
          </div>

          <!-- Category Filter -->
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            ${this.categories.map(category => html`
              <button
                class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  this.selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }"
                @click=${() => this.selectedCategory = category}
              >
                ${category}
              </button>
            `)}
          </div>

          <!-- Gallery Grid -->
          <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              ${this.filteredImages.map((image, index) => {
                const isLoading = this.loadingImages.has(index);
                const hasError = this.errorImages.has(index);
                
                return html`
                  <div 
                    class="image-card group bg-white rounded-xl overflow-hidden shadow-md border-2 border-gray-200 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:border-blue-300"
                    @click=${() => this.openModal(index)}
                    style="animation-delay: ${index * 0.1}s"
                  >
                    <div class="relative overflow-hidden aspect-[4/3]">
                      ${isLoading ? html`
                        <div class="w-full h-full image-loading"></div>
                      ` : ''}
                      
                      ${hasError ? html`
                        <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                          <div class="text-center text-gray-400">
                            <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p class="text-sm">Failed to load</p>
                          </div>
                        </div>
                      ` : html`
                        <img 
                          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          src="${image.thumb}"
                          alt="${image.title}"
                          @load=${() => this.handleImageLoad(index)}
                          @error=${() => this.handleImageError(index)}
                          @loadstart=${() => this.handleImageLoadStart(index)}
                        />
                      `}
                      
                      <!-- Overlay -->
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-4 left-4 right-4">
                          <span class="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full mb-2">
                            ${image.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="p-4">
                      <h3 class="font-bold text-gray-800 text-lg mb-2 line-clamp-1">${image.title}</h3>
                      <p class="text-gray-600 text-sm leading-relaxed line-clamp-2">${image.description}</p>
                    </div>
                  </div>
                `;
              })}
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      ${this.isModalOpen && currentImage ? html`
        <div 
          class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          @click=${this.closeModal}
        >
          <div 
            class="modal-content relative max-w-6xl max-h-full w-full"
            @click=${(e: Event) => e.stopPropagation()}
          >
            <!-- Close Button -->
            <button 
              class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              @click=${this.closeModal}
              aria-label="Close modal"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <!-- Navigation Buttons -->
            <button 
              class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 hover:bg-black/70 rounded-full p-3"
              @click=${() => this.navigateModal('prev')}
              aria-label="Previous image"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <button 
              class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 hover:bg-black/70 rounded-full p-3"
              @click=${() => this.navigateModal('next')}
              aria-label="Next image"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            <!-- Image Container -->
            <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img 
                class="w-full h-auto max-h-[70vh] object-contain"
                src="${currentImage.src}"
                alt="${currentImage.title}"
              />
              
              <!-- Image Info -->
              <div class="p-6 bg-white">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <div class="flex items-center gap-2 mb-2">
                      <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        ${currentImage.category}
                      </span>
                      <span class="text-gray-400 text-sm">
                        ${this.selectedImageIndex + 1} of ${this.images.length}
                      </span>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">${currentImage.title}</h2>
                    <p class="text-gray-600 leading-relaxed">${currentImage.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ` : ''}
    `;
  }
}
