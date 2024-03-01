import template from "./info-cards.template";

class InfoCards extends HTMLElement {
  constructor() {
    super();

    const node = document.importNode(template.content, true);
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.append(node);
  }
}
customElements.define("info-cards", InfoCards);
export default InfoCards;
