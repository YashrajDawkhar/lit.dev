import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement("gallery-component")
export class GalleryComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .gallery-container {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .gallery-title {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 32px;
      color: #2c3e50;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }

    .gallery-item {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }

    .gallery-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .gallery-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }

    .gallery-caption {
      padding: 16px;
    }

    .gallery-caption h3 {
      margin: 0 0 8px 0;
      font-size: 1.2rem;
      color: #2c3e50;
    }

    .gallery-caption p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }

    .modal.open {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-content {
      max-width: 90%;
      max-height: 90%;
      position: relative;
    }

    .modal-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .modal-close {
      position: absolute;
      top: -40px;
      right: 0;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
    }

    .modal-close:hover {
      opacity: 0.7;
    }
  `;

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
      <div class="gallery-container">
        <h2 class="gallery-title">Photo Gallery</h2>
        <div class="gallery-grid">
          ${this.images.map((image, index) => html`
            <div class="gallery-item" @click=${() => this.openModal(index)}>
              <img class="gallery-image" src="${image.src}" alt="${image.title}" />
              <div class="gallery-caption">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
              </div>
            </div>
          `)}
        </div>
      </div>

      <div class="modal ${this.selectedImageIndex >= 0 ? 'open' : ''}" @click=${this.closeModal}>
        ${this.selectedImageIndex >= 0 ? html`
          <div class="modal-content" @click=${(e: Event) => e.stopPropagation()}>
            <button class="modal-close" @click=${this.closeModal}>&times;</button>
            <img 
              class="modal-image" 
              src="${this.images[this.selectedImageIndex].src}" 
              alt="${this.images[this.selectedImageIndex].title}"
            />
          </div>
        ` : ''}
      </div>
    `;
  }
}
