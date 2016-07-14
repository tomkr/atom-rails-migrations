'use babel';

import MigrationRunner from '../lib/migration-runner';

describe('MigrationRunner', () => {
  let subject = new MigrationRunner();

  beforeEach(() => {
    // spyOn(window, 'BufferedProcess')
  });

  describe('migrate', () => {
    it('runs the db:migrate command', () => {
      subject.migrate();
      // expect(process.mostRecentCall.args[0]).toMatch(/db:migrate/);
    });
  });

  describe('rollback', () => {
    it('runs the db:rollback command', () => {
      subject.rollback();
      // expect(process.mostRecentCall.args[0]).toMatch(/db:rollback/);
    });
  });

  describe('status', () => {
    it('runs the db:rollback command', () => {
      subject.status();
      // expect(process.mostRecentCall.args[0]).toMatch(/db:migrate:status/);
    });
  });
});
