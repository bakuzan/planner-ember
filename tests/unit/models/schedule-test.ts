import { setupTest } from 'planner-ember/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | rental', function (hooks) {
  setupTest(hooks);

  test('it works', function (assert) {
    const store = this.owner.lookup('service:store');

    const schedule = store.createRecord('schedule', {
      schedule_id: 1,
      name: 'Test Schedule',
      description: 'My test schedule is just something to test with.',
    });

    assert.strictEqual(schedule.name, 'Test Schedule');
  });
});
