'use babel';

import { BufferedProcess } from 'atom';

export default class MigrationRunner {
  constructor(outputHandler) {
    this.outputHandler = outputHandler;
  }

  run(rakeTask) {
    let projectPath = atom.project.getPaths()[0];
    let command = "bundle";
    let process = new BufferedProcess({
      command: command,
      args: ["exec", "rake", rakeTask],
      options: { cwd: projectPath },
      stdout: this.outputHandler.append.bind(this.outputHandler),
      stderr: this.outputHandler.appendError.bind(this.outputHandler)
    })
  }

  migrate() {
    this.run('db:migrate');
  }

  rollback() {
    this.run('db:rollback');
  }

  status() {
    this.run('db:migrate:status');
  }
}
