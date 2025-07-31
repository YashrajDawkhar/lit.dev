import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("form-component")
export class FormComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }

    .form-container {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      animation: fadeIn 0.5s ease forwards;
    }

    .form-title {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 32px;
      color: #2c3e50;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #2c3e50;
      font-size: 1rem;
    }

    .form-input,
    .form-textarea,
    .form-select {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e1e5e9;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      box-sizing: border-box;
    }

    .form-input:focus,
    .form-textarea:focus,
    .form-select:focus {
      outline: none;
      border-color: #1976d2;
      box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
    }

    .form-textarea {
      resize: vertical;
      min-height: 100px;
    }

    .form-checkbox-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .form-checkbox {
      width: auto;
      margin: 0;
    }

    .form-button {
      background: #1976d2;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
      width: 100%;
      box-shadow: 0 3px 6px rgba(25, 118, 210, 0.4);
    }

    .form-button:hover {
      background: #1565c0;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(21, 101, 192, 0.6);
    }

    .form-button:active {
      transform: translateY(0);
      box-shadow: 0 3px 6px rgba(21, 101, 192, 0.4);
    }

    .success-message,
    .error-message {
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 20px;
      opacity: 0;
      animation: fadeIn 0.8s forwards;
    }

    .success-message {
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .error-message {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  `;

  @state()
  private formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    message: "",
    newsletter: false,
  };

  @state()
  private submitted = false;

  @state()
  private error = "";

  private handleInputChange(field: string, value: string | boolean) {
    this.formData = {
      ...this.formData,
      [field]: value,
    };
  }

  private handleSubmit(e: Event) {
    e.preventDefault();
    this.error = "";

    // Basic validation
    if (!this.formData.firstName || !this.formData.lastName || !this.formData.email) {
      this.error = "Please fill in all required fields (First Name, Last Name, Email)";
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.error = "Please enter a valid email address";
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", this.formData);
    this.submitted = true;

    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.formData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        message: "",
        newsletter: false,
      };
    }, 3000);
  }

  render() {
    return html`
      <div class="form-container">
        <h2 class="form-title">User Information Form</h2>

        ${this.submitted
          ? html`<div class="success-message">
              Thank you! Your information has been submitted successfully.
            </div>`
          : ""}

        ${this.error
          ? html`<div class="error-message">${this.error}</div>`
          : ""}

        <form @submit=${this.handleSubmit}>
          <div class="form-group">
            <label class="form-label" for="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              class="form-input"
              .value=${this.formData.firstName}
              @input=${(e: Event) =>
                this.handleInputChange("firstName", (e.target as HTMLInputElement).value)}
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              class="form-input"
              .value=${this.formData.lastName}
              @input=${(e: Event) =>
                this.handleInputChange("lastName", (e.target as HTMLInputElement).value)}
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="email">Email *</label>
            <input
              type="email"
              id="email"
              class="form-input"
              .value=${this.formData.email}
              @input=${(e: Event) =>
                this.handleInputChange("email", (e.target as HTMLInputElement).value)}
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              class="form-input"
              .value=${this.formData.phone}
              @input=${(e: Event) =>
                this.handleInputChange("phone", (e.target as HTMLInputElement).value)}
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-input"
              min="1"
              max="120"
              .value=${this.formData.age}
              @input=${(e: Event) =>
                this.handleInputChange("age", (e.target as HTMLInputElement).value)}
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="gender">Gender</label>
            <select
              id="gender"
              class="form-select"
              .value=${this.formData.gender}
              @change=${(e: Event) =>
                this.handleInputChange("gender", (e.target as HTMLSelectElement).value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="message">Message</label>
            <textarea
              id="message"
              class="form-textarea"
              placeholder="Tell us something about yourself..."
              .value=${this.formData.message}
              @input=${(e: Event) =>
                this.handleInputChange("message", (e.target as HTMLTextAreaElement).value)}
            ></textarea>
          </div>

          <div class="form-group">
            <div class="form-checkbox-group">
              <input
                type="checkbox"
                id="newsletter"
                class="form-checkbox"
                .checked=${this.formData.newsletter}
                @change=${(e: Event) =>
                  this.handleInputChange("newsletter", (e.target as HTMLInputElement).checked)}
              />
              <label class="form-label" for="newsletter">Subscribe to newsletter</label>
            </div>
          </div>

          <button type="submit" class="form-button">Submit Information</button>
        </form>
      </div>
    `;
  }
}
