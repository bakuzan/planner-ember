import { pageTitle } from 'ember-page-title';
import Component from '@glimmer/component';

interface ScheduleArgs {
  model: {
    id: number;
    name: string;
    description: string;
  };
}

export default class Schedule extends Component<ScheduleArgs> {
  get pageTitle() {
    return this.args.model?.name || 'Schedule';
  }

  <template>
    {{pageTitle this.pageTitle}}

    <h2>{{@model.name}}</h2>
    <p>{{@model.description}}</p>
  </template>
}
