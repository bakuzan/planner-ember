import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import ScheduleCard from 'planner-ember/components/schedule-card';
import SchedulesFilter from 'planner-ember/components/schedules/filter';

export default class Schedules extends Component {
  @tracked query = '';

  @action
  updateQuery(event: Event) {
    const formData = new FormData(event.currentTarget);
    this.query = formData.get('scheduleFilter');
  }

  @action
  handleKeydown(e: Event) {
    if (e.key === 'Escape') {
      this.query = '';
    }
  }

  @action
  handleSubmit(event: Event) {
    event.preventDefault();
    this.updateQuery(event);
  }

  <template>
    <div class="schedules">
      <form {{on "input" this.updateQuery}} {{on "submit" this.handleSubmit}}>
        <label class="label">
          <span>Search Schedules</span>
          <input
            type="search"
            name="scheduleFilter"
            {{on "keydown" this.handleKeydown}}
          />
        </label>
        <p class="help-text">The results below will update as you type.</p>
      </form>

      <ul class="results">
        <SchedulesFilter
          @schedules={{@schedules}}
          @query={{this.query}}
          as |results|
        >
          {{#each results as |schedule|}}
            <li><ScheduleCard @schedule={{schedule}} /></li>
          {{/each}}
        </SchedulesFilter>
      </ul>
    </div>
  </template>
}
