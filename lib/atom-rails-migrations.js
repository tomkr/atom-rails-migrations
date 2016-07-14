'use babel';

import MigrationRunner from './migration-runner';
import { CompositeDisposable } from 'atom';
import OutputHandler from './output-handler';

export default {

  output: null,
  subscriptions: null,
  migrationRunner: null,
  messages: null,
  view: null,
  panel: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-rails-migrations:run': () => this.run(),
      'atom-rails-migrations:rollback': () => this.rollback(),
      'atom-rails-migrations:status': () => this.status(),
      'atom-rails-migrations:hide': () => this.hide()
    }));
    this.outputHandler = new OutputHandler();
    this.migrationRunner = new MigrationRunner(this.outputHandler);
  },

  deactivate() {
    this.subscriptions.dispose();
    this.output.destroy();
  },

  serialize() {},

  run() {
    this.migrationRunner.migrate();
  },

  rollback() {
    this.migrationRunner.rollback();
  },

  status() {
    this.migrationRunner.status();
  },

  hide() {
    this.outputHandler.hide();
  }
};
