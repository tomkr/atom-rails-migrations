'use babel';

import OutputView from './output-view';

export default class OutputHandler {
  constructor(outputView) {
    this.view = new OutputView();
    this.panel = atom.workspace.addRightPanel({
      item: this.view.getElement()
    });
  }

  append(content) {
    this.panel.show();
    content.toString().split('\n').forEach((line) => {
      this.view.addContent(line);
    })
  }

  appendError(content) {
    this.panel.show();
    content.toString().split('\n').forEach((line) => {
      this.view.addContent(line, 'text-error');
    })
  }

  hide() {
    this.panel.hide();
  }
}
