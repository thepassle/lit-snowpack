import { LitElement, html, css } from "../web_modules/lit-element.js";
import { until } from '../web_modules/lit-html/directives/until.js';

export class LitSnowpack extends LitElement {
  static get properties() {
    return {
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.title = "Lit Snowpack"
  }

  static get styles() {
    return css`
      h1 {
        color: blue;
      }
    `;
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <ul>
        ${until(this.fetchDatas(), 'Loading...')}
      </ul>
    `;
  }

  fetchDatas() {
    return fetch('https://swapi.co/api/people')
    .then(r => r.json())
    .then(({results}) => results.map(({name}) => html`<li>${name}</li>`));
  }
}
