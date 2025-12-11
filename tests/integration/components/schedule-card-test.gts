import { module, test } from 'qunit';
import { setupRenderingTest } from 'planner-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import ScheduleCard from 'planner-ember/components/schedule-card';
import { tracked } from '@glimmer/tracking';

module('Integration | Component | schedule-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a schedule', async function (assert) {
    class State {
      @tracked schedule = {
        id: 1,
        name: 'Test Schedule',
        description:
          'A test schedule that is hard-coded so I can build up a UI to start with.',
      };
    }

    const state = new State();

    await render(
      <template><ScheduleCard @schedule={{state.schedule}} /></template>
    );

    assert.dom('article').hasClass('schedule');
    assert.dom('article h3').hasText('Test Schedule');
    assert.dom('article h3 a').hasAttribute('href', '/schedule/1');
  });
});
