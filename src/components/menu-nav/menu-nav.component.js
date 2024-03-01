import template from "./menu-nav.template.js";

class MenuNav extends HTMLElement {
  constructor() {
    super();

    const node = document.importNode(template.content, true);
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.append(node);
  }
}
customElements.define("menu-nav", MenuNav);
export default MenuNav;
