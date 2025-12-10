import { module, test } from 'qunit';
import { setupRenderingTest } from 'planner-ember/tests/helpers';
import { render, fillIn } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import Schedules from 'planner-ember/components/schedule-list';

class State {
  @tracked schedules = {};
}

const state = new State();

module('Integration | Component | schedules', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    state.schedules = [
      {
        schedule_id: 1,
        name: 'Test Schedule',
      },
      {
        schedule_id: 2,
        name: 'Another Schedule',
      },
      {
        schedule_id: 3,
        name: 'Third Schedule',
      },
    ];
  });

  test('it renders all given schedule properties by default', async function (assert) {
    await render(
      <template><Schedules @schedules={{state.schedules}} /></template>
    );

    assert.dom('.schedules').exists();
    assert.dom('.schedules input').exists();

    assert.dom('.schedules .results').exists();
    assert.dom('.schedules .results li').exists({ count: 3 });

    assert
      .dom('.schedules .results li:nth-of-type(1)')
      .containsText('Test Schedule');

    assert
      .dom('.schedules .results li:nth-of-type(2)')
      .containsText('Another Schedule');

    assert
      .dom('.schedules .results li:nth-of-type(3)')
      .containsText('Third Schedule');
  });

  test('it updates the results according to the search query', async function (assert) {
    await render(
      <template><Schedules @schedules={{state.schedules}} /></template>
    );

    assert.dom('.schedules').exists();
    assert.dom('.schedules input').exists();

    await fillIn('.schedules input', 'Third');

    assert.dom('.schedules .results').exists();
    assert.dom('.schedules .results li').exists({ count: 1 });
    assert.dom('.schedules .results li').containsText('Third Schedule');

    await fillIn('.schedules input', 'test');

    assert.dom('.schedules .results').exists();
    assert.dom('.schedules .results li').exists({ count: 1 });
    assert.dom('.schedules .results li').containsText('Test Schedule');
  });
});
