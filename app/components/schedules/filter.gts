import Component from '@glimmer/component';

export default class SchedulesFilter extends Component {
  get results() {
    const { schedules, query } = this.args;

    if (query) {
      const regex = new RegExp(query, 'i');
      return schedules.filter((schedule) => regex.test(schedule.name));
    }

    return schedules;
  }

  <template>{{yield this.results}}</template>
}
