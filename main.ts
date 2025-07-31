import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-greeting")
export class MyGreeting extends LitElement {
    static styles = css`
    :host {
      display: block;
      padding: 16px;
      background-color: #111;
      color: #0f0;
      font-family: sans-serif;
    }
  `;

    render() {
        return html`<h1>Hello from Lit! 👋</h1>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "my-greeting": MyGreeting;
    }
} 