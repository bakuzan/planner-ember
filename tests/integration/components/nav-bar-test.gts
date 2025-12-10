import { module, test } from 'qunit';
import { setupRenderingTest } from 'planner-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import NavBar from 'planner-ember/components/nav-bar';

module('Integration | Component | nav-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Arrange

    // Act
    await render(<template><NavBar /></template>);

    // Assert
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Planner');
  });
});
