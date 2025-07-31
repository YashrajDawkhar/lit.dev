import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

@customElement("particle-bg")
export class ParticleBg extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
      overflow: hidden;
    }

    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `;

  @property({ type: Number })
  particleCount = 80;

  @property({ type: Number })
  connectionDistance = 120;

  @property({ type: Number })
  mouseInfluence = 100;

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId: number = 0;
  private mouse = { x: 0, y: 0 };
  private canvasWidth = 0;
  private canvasHeight = 0;

  firstUpdated() {
    this.canvas = this.shadowRoot!.querySelector('canvas')!;
    this.ctx = this.canvas.getContext('2d')!;
    
    this.setupCanvas();
    this.initParticles();
    this.startAnimation();
    
    window.addEventListener('resize', this.handleResize.bind(this));
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('resize', this.handleResize.bind(this));
    window.removeEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  private setupCanvas() {
    const rect = this.getBoundingClientRect();
    this.canvasWidth = rect.width;
    this.canvasHeight = rect.height;
    
    this.canvas.width = this.canvasWidth * window.devicePixelRatio;
    this.canvas.height = this.canvasHeight * window.devicePixelRatio;
    
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    this.canvas.style.width = this.canvasWidth + 'px';
    this.canvas.style.height = this.canvasHeight + 'px';
  }

  private initParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvasWidth,
        y: Math.random() * this.canvasHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }
  }

  private handleResize() {
    this.setupCanvas();
    this.initParticles();
  }

  private handleMouseMove(event: MouseEvent) {
    const rect = this.getBoundingClientRect();
    this.mouse.x = event.clientX - rect.left;
    this.mouse.y = event.clientY - rect.top;
  }

  private updateParticles() {
    this.particles.forEach(particle => {
      // Mouse influence
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < this.mouseInfluence) {
        const force = (this.mouseInfluence - distance) / this.mouseInfluence;
        const angle = Math.atan2(dy, dx);
        particle.vx += Math.cos(angle) * force * 0.01;
        particle.vy += Math.sin(angle) * force * 0.01;
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Boundary collision
      if (particle.x < 0 || particle.x > this.canvasWidth) {
        particle.vx *= -1;
        particle.x = Math.max(0, Math.min(this.canvasWidth, particle.x));
      }
      if (particle.y < 0 || particle.y > this.canvasHeight) {
        particle.vy *= -1;
        particle.y = Math.max(0, Math.min(this.canvasHeight, particle.y));
      }

      // Friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;
    });
  }

  private drawParticles() {
    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(100, 200, 255, 0.8)`;
      this.ctx.fill();
      
      // Add glow effect
      this.ctx.shadowColor = '#64c8ff';
      this.ctx.shadowBlur = 10;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    });
  }

  private drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          const opacity = 1 - (distance / this.connectionDistance);
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.3})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    }
  }

  private startAnimation() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
    this.updateParticles();
    this.drawConnections();
    this.drawParticles();
    
    this.animationId = requestAnimationFrame(() => this.startAnimation());
  }

  render() {
    return html`<canvas></canvas>`;
  }
}

