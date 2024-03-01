import template from "./app.template";

class App extends HTMLElement {
  constructor() {
    super();

    const node = document.importNode(template.content, true);
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.append(node);
  }
}

customElements.define("app", App);
export default App;
