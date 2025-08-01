import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwindMixin.js";


@customElement("gallery-component")
export class GalleryComponent extends TailwindElement {
  @property({ type: Array })
  images = [
    {
      src: "https://picsum.photos/400/300?random=1",
      title: "Beautiful Landscape",
      description: "A stunning view of mountains and valleys"
    },
    {
      src: "https://picsum.photos/400/300?random=2",
      title: "City Skyline",
      description: "Modern architecture against the evening sky"
    },
    {
      src: "https://picsum.photos/400/300?random=3",
      title: "Ocean Waves",
      description: "Peaceful waves crashing on the shore"
    },
    {
      src: "https://picsum.photos/400/300?random=4",
      title: "Forest Path",
      description: "A winding path through ancient trees"
    },
    {
      src: "https://picsum.photos/400/300?random=5",
      title: "Desert Sunset",
      description: "Golden hour in the vast desert"
    },
    {
      src: "https://picsum.photos/400/300?random=6",
      title: "Mountain Peak",
      description: "Snow-capped peaks reaching for the sky"
    }
  ];

  @property({ type: Number })
  selectedImageIndex = -1;

  private openModal(index: number) {
    this.selectedImageIndex = index;
  }

  private closeModal() {
    this.selectedImageIndex = -1;
  }

  render() {
    return html`
      <div class="block font-sans max-w-6xl mx-auto p-5">
        <div class="bg-gray-50 rounded-xl p-6 shadow-lg">
          <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Photo Gallery</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            ${this.images.map((image, index) => html`
              <div class="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:shadow-xl" @click=${() => this.openModal(index)}>
                <img class="w-full h-48 object-cover block" src="${image.src}" alt="${image.title}" />
                <div class="p-4">
                  <h3 class="m-0 mb-2 text-lg text-gray-800 font-semibold">${image.title}</h3>
                  <p class="m-0 text-gray-600 text-sm leading-relaxed">${image.description}</p>
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>

      <div class="fixed inset-0 z-50 bg-black bg-opacity-80 ${this.selectedImageIndex >= 0 ? 'flex' : 'hidden'} items-center justify-center" @click=${this.closeModal}>
        ${this.selectedImageIndex >= 0 ? html`
          <div class="max-w-[90%] max-h-[90%] relative" @click=${(e: Event) => e.stopPropagation()}>
            <button class="absolute -top-10 right-0 text-white text-3xl cursor-pointer bg-transparent border-0 p-0 hover:opacity-70" @click=${this.closeModal}>&times;</button>
            <img 
              class="w-full h-auto rounded-lg" 
              src="${this.images[this.selectedImageIndex].src}" 
              alt="${this.images[this.selectedImageIndex].title}"
            />
          </div>
        ` : ''}
      </div>
    `;
  }
}
