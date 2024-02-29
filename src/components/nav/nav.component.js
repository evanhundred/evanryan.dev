import template from "./nav.template.js";

class Nav extends HTMLElement {
  constructor() {
    super();

    const node = document.importNode(template.content, true);
  }
}
