import { adoptStyles, LitElement, unsafeCSS } from "lit";
import style from "../styles/tailwind.global.css?inline";

const stylesheet = unsafeCSS(style);

// Simple base class that automatically applies Tailwind styles
export class TailwindElement extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    if (this.shadowRoot) {
      adoptStyles(this.shadowRoot, [stylesheet]);
    }
  }
}


