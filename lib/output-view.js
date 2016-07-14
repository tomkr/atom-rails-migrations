'use babel';

export default class OutputView {
  constructor() {
    this.element = document.createElement("div");
    this.element.style.cssText = "overflow:auto;white-space:pre;font-family:monospace;"
  }

  addContent(content, className="text-success") {
    let message = document.createElement("div");
    message.classList.add(className);
    message.textContent = content;
    this.element.appendChild(message);
  }

  serialize() {
  }

  destroy() {
    this.element.remove()
  }

  getElement() {
    return this.element
  }
}
