import { LitElement, html, css } from 'lit';

class NavBar extends LitElement {
  static get properties() {
    return {
      text: {
        type: String,
      }
    }
  }

  static styles = css`
    header {
      color: #000;
      padding: 16px;
      text-align: center;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 16px;
    }

    .text {
      font-size: 18px;
    }
    
  `;

  constructor() {
    super();
    this.text = 'Intellect Flow';
  }

  render() {
    return html`
    <header>
      <h1><slot>${this.text}</slot></h1>
      <p class="subtitle">"Increase your learning ability using artifical intelligence"</p>
    </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);