import { module, test } from 'qunit';
import { setupTest } from 'planner-ember/tests/helpers';

module('Unit | Route | schedule', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:schedule');
    assert.ok(route);
  });
});
