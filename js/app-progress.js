class AppProgress extends HTMLElement {
  static template() {
    return `
      <style>
        :host {
          display: block;
          text-align: center;
          position: relative;
        }
        circle {
          stroke-width: 6;
        }
        .fg {
          stroke: var(--blue);
          fill: transparent;
          transform-origin: 50% 50%;
          transform: rotate(-90deg);
        }
        .bg {
          stroke: #eee;
          fill: transparent;
        }
        text {
          fill: black;
        }
      </style>
      <svg height="150" width="150">
        <circle cx="75" cy="75" r="69" class="bg" />
        <circle cx="75" cy="75" r="69" class="fg" />
        <text x="50" y="85" font-weight="bold" font-size="2em" />
        <text x="90" y="72" font-size="1.6em">%</text>
      </svg>
    `;
  }
  
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    this.text = this.shadowRoot.querySelector('svg text');
    this.circle = this.shadowRoot.querySelector('.fg');
    
    const radius = this.circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - this.value / 100 * circumference;

    this.text.textContent = this.value;
    this.circle.style.strokeDasharray = `${circumference} ${circumference}`;
    this.circle.style.strokeDashoffset = offset;

  }

  get value() {
    return +this.getAttribute('value');
  }
}

const template=  document.createElement('template');
template.innerHTML = AppProgress.template();

customElements.define('app-progress', AppProgress);