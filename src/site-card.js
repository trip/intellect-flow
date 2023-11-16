import { LitElement, html, css } from 'lit';

export class SiteCard extends LitElement {
  static get properties() {
    return {
      course: {
        type: String,
        reflect: true
      }
    }
  }

  static get styles() {
    return css`
    .card {
      width: 200px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 24px;
      margin: 8px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .card-text {
      text-align: center;
      margin-top: 8px;
    }

    .btn-wrapper {
      margin: 16px auto;
    }

    .btn-wrapper button {
      margin-left: 8px;
      margin-right: 8px;
      font-size: 16px;
      color: #000;
      background-color: #f0dc4e;
      border-radius: 4px;
      transition: transform 0.3s;
    }

    .btn-wrapper button:hover,
    .btn-wrapper button:focus {
      transform: scale(1.2);
    }
    
    ::slotted(img) {
      background-color: #000000;
      border-radius: 8px;
      height: 54px;
      width: 54px;
    }

    ::slotted(p) {
      color: #000;
      line-height: 32px;
    }
    `;
  }

  constructor() {
    super();
    this.course = null;
    this.image = null;
  }

  render() {
    return html`
      <div class="card">
        <div class="card-text">
          <slot name="img"></slot>
          <h2>${this.course}</h2>
          <slot name="information"></slot>
          <div class="btn-wrapper">
            <button>Start now</button>
          </div>
        </div>
    </div>
    `;
  }
}

customElements.define('site-card', SiteCard);