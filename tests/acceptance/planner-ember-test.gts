import { module, test } from 'qunit';
import { click, find, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'planner-ember/tests/helpers';

module('Acceptance | planner ember', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Planner');
    assert.dom('h2').hasText('Schedules');
  });

  test('viewing the details of a schedule', async function (assert) {
    await visit('/');
    assert.dom('.schedule').exists();

    await click('.schedule:first-of-type a');
    assert.strictEqual(currentURL(), '/schedule/1');
  });

  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('Planner');

    await click('nav a.menu-index');
    assert.strictEqual(currentURL(), '/');
  });
});
