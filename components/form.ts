import { html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwindMixin.js";

@customElement("form-component")
export class FormComponent extends TailwindElement {
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

  @state()
  private isSubmitting = false;

  static styles = css`
    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }
    
    .animate-fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-spin {
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  private handleInputChange(field: string, value: string | boolean) {
    this.formData = {
      ...this.formData,
      [field]: value,
    };
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();
    this.error = "";
    this.isSubmitting = true;

    // Basic validation
    if (!this.formData.firstName || !this.formData.lastName || !this.formData.email) {
      this.error = "Please fill in all required fields (First Name, Last Name, Email)";
      this.isSubmitting = false;
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.error = "Please enter a valid email address";
      this.isSubmitting = false;
      return;
    }

    // Simulate form submission with delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", this.formData);
    this.submitted = true;
    this.isSubmitting = false;

    // Reset form after 4 seconds
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
    }, 4000);
  }

  render() {
    return html`
      <div class="min-h-screen bg-gray-50 py-8 px-4 sm:py-12">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl shadow-xl border-2 border-gray-300 overflow-hidden">
            <!-- Header Section -->
            <div class="bg-blue-600 px-6 py-8 text-center sm:px-8">
              <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">User Information Form</h2>
              <p class="text-blue-100 text-sm sm:text-base">Please fill out your details below</p>
            </div>

            <!-- Form Content -->
            <div class="px-6 py-8 sm:px-8 bg-white">
              ${this.submitted
                ? html`
                  <div class="bg-green-50 border-2 border-green-300 text-green-800 px-6 py-4 rounded-xl mb-6 animate-fade-in">
                    <div class="flex items-center gap-3">
                      <svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h3 class="font-semibold">Success!</h3>
                        <p class="text-sm">Your information has been submitted successfully.</p>
                      </div>
                    </div>
                  </div>
                `
                : ""}

              ${this.error
                ? html`
                  <div class="bg-red-50 border-2 border-red-300 text-red-800 px-6 py-4 rounded-xl mb-6 animate-fade-in">
                    <div class="flex items-center gap-3">
                      <svg class="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <h3 class="font-semibold">Error</h3>
                        <p class="text-sm">${this.error}</p>
                      </div>
                    </div>
                  </div>
                `
                : ""}

              <form @submit=${this.handleSubmit} class="space-y-6">
                <!-- Name Fields Row -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div class="space-y-3">
                    <label class="block font-bold text-gray-800 text-base" for="firstName">
                      First Name <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      class="w-full px-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 bg-gray-50 focus:bg-white shadow-sm"
                      .value=${this.formData.firstName}
                      @input=${(e: Event) =>
                        this.handleInputChange("firstName", (e.target as HTMLInputElement).value)}
                      required
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div class="space-y-3">
                    <label class="block font-bold text-gray-800 text-base" for="lastName">
                      Last Name <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      class="w-full px-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 bg-gray-50 focus:bg-white shadow-sm"
                      .value=${this.formData.lastName}
                      @input=${(e: Event) =>
                        this.handleInputChange("lastName", (e.target as HTMLInputElement).value)}
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <!-- Email Field -->
                <div class="space-y-3">
                  <label class="block font-bold text-gray-800 text-base" for="email">
                    Email Address <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      class="w-full pl-12 pr-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 bg-gray-50 focus:bg-white shadow-sm"
                      .value=${this.formData.email}
                      @input=${(e: Event) =>
                        this.handleInputChange("email", (e.target as HTMLInputElement).value)}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <!-- Phone and Age Row -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div class="space-y-3">
                    <label class="block font-bold text-gray-800 text-base" for="phone">
                      Phone Number
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        class="w-full pl-12 pr-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 bg-gray-50 focus:bg-white shadow-sm"
                        .value=${this.formData.phone}
                        @input=${(e: Event) =>
                          this.handleInputChange("phone", (e.target as HTMLInputElement).value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div class="space-y-3">
                    <label class="block font-bold text-gray-800 text-base" for="age">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      class="w-full px-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 bg-gray-50 focus:bg-white shadow-sm"
                      min="1"
                      max="120"
                      .value=${this.formData.age}
                      @input=${(e: Event) =>
                        this.handleInputChange("age", (e.target as HTMLInputElement).value)}
                      placeholder="25"
                    />
                  </div>
                </div>

                <!-- Gender Field -->
                <div class="space-y-3">
                  <label class="block font-bold text-gray-800 text-base" for="gender">
                    Gender
                  </label>
                  <div class="relative">
                    <select
                      id="gender"
                      class="w-full px-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 appearance-none bg-gray-50 focus:bg-white shadow-sm"
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
                    <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Message Field -->
                <div class="space-y-3">
                  <label class="block font-bold text-gray-800 text-base" for="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    class="w-full px-4 py-4 border-3 border-gray-400 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-gray-500 resize-y min-h-[140px] bg-gray-50 focus:bg-white shadow-sm"
                    placeholder="Tell us something about yourself..."
                    .value=${this.formData.message}
                    @input=${(e: Event) =>
                      this.handleInputChange("message", (e.target as HTMLTextAreaElement).value)}
                  ></textarea>
                </div>

                <!-- Newsletter Checkbox -->
                <div class="space-y-3">
                  <div class="flex items-start gap-4 p-5 bg-blue-50 rounded-lg border-2 border-blue-200 hover:bg-blue-100 transition-colors duration-200">
                    <input
                      type="checkbox"
                      id="newsletter"
                      class="w-6 h-6 text-blue-600 bg-white border-3 border-gray-400 rounded focus:ring-blue-500 focus:ring-3 mt-1 flex-shrink-0"
                      .checked=${this.formData.newsletter}
                      @change=${(e: Event) =>
                        this.handleInputChange("newsletter", (e.target as HTMLInputElement).checked)}
                    />
                    <div class="flex-1">
                      <label class="font-bold text-gray-800 text-base cursor-pointer" for="newsletter">
                        Subscribe to newsletter
                      </label>
                      <p class="text-sm text-gray-600 mt-2">Get updates about new features and announcements delivered to your inbox</p>
                    </div>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="pt-6">
                  <button 
                    type="submit" 
                    ?disabled=${this.isSubmitting}
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white border-none px-8 py-5 rounded-lg text-lg font-bold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                  >
                    ${this.isSubmitting 
                      ? html`
                        <svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      `
                      : html`
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        Submit Information
                      `
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
