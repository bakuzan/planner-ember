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

    {{log @model.timeBlocks}}

    {{#each @model.timeBlocks as |tb|}}
      <div>
        {{tb.start}}
        →
        {{tb.end}}

        {{#if tb.category}}
          <span class="category-block" data-colour="{{tb.category.colour}}">
            {{tb.category.name}}
          </span>
        {{else}}
          <span>No category</span>
        {{/if}}
      </div>
    {{/each}}
  </template>
}
