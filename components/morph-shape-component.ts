import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("morph-shape")
export class MorphShapeComponent extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: 100px;
      height: 100px;
    }

    .morph-container {
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .morph-container:hover {
      transform: scale(1.1);
    }

    svg {
      width: 100%;
      height: 100%;
    }

    .morph-path {
      fill: var(--morph-color, #4a90e2);
      stroke: var(--morph-stroke, #2c5aa0);
      stroke-width: var(--morph-stroke-width, 2);
      transition: fill 0.3s ease, stroke 0.3s ease;
    }

    .morph-path.animating {
      transition: d 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    :host([interactive]) .morph-container:hover .morph-path {
      fill: var(--morph-hover-color, #5ba0f2);
    }

    :host([loading]) .morph-path {
      animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.7;
        transform: scale(0.95);
      }
    }
  `;

  @property({ type: String })
  shape: 'circle' | 'square' | 'triangle' = 'circle';

  @property({ type: Boolean })
  autoMorph = false;

  @property({ type: Number })
  morphInterval = 2000;

  @property({ type: Boolean })
  interactive = false;

  @property({ type: Boolean })
  loading = false;

  @state()
  private currentShape: 'circle' | 'square' | 'triangle' = 'circle';

  @state()
  private isAnimating = false;

  private morphTimer?: number;

  private shapes = {
    circle: "M 50 10 A 40 40 0 1 1 49.99 10 Z",
    square: "M 10 10 L 90 10 L 90 90 L 10 90 Z",
    triangle: "M 50 10 L 90 80 L 10 80 Z"
  };

  connectedCallback() {
    super.connectedCallback();
    this.currentShape = this.shape;
    if (this.autoMorph) {
      this.startAutoMorph();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopAutoMorph();
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('shape') && !this.autoMorph) {
      this.morphToShape(this.shape);
    }
    if (changedProperties.has('autoMorph')) {
      if (this.autoMorph) {
        this.startAutoMorph();
      } else {
        this.stopAutoMorph();
      }
    }
  }

  private startAutoMorph() {
    this.stopAutoMorph();
    this.morphTimer = window.setInterval(() => {
      this.morphToNextShape();
    }, this.morphInterval);
  }

  private stopAutoMorph() {
    if (this.morphTimer) {
      clearInterval(this.morphTimer);
      this.morphTimer = undefined;
    }
  }

  private morphToNextShape() {
    const shapeOrder: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
    const currentIndex = shapeOrder.indexOf(this.currentShape);
    const nextIndex = (currentIndex + 1) % shapeOrder.length;
    this.morphToShape(shapeOrder[nextIndex]);
  }

  private morphToShape(targetShape: 'circle' | 'square' | 'triangle') {
    if (this.currentShape === targetShape || this.isAnimating) return;

    this.isAnimating = true;
    this.currentShape = targetShape;

    // Reset animation state after transition
    setTimeout(() => {
      this.isAnimating = false;
    }, 800);

    this.dispatchEvent(new CustomEvent('shape-changed', {
      detail: { shape: targetShape },
      bubbles: true
    }));
  }

  private handleClick() {
    if (this.interactive && !this.autoMorph) {
      this.morphToNextShape();
    }
  }

  render() {
    return html`
      <div class="morph-container" @click=${this.handleClick}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            class="morph-path ${this.isAnimating ? 'animating' : ''}"
            d=${this.shapes[this.currentShape]}
          />
        </svg>
      </div>
    `;
  }
}
