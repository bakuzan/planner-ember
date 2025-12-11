import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { query } from '@ember-data/json-api/request';

import type ScheduleModel from 'planner-ember/models/schedule';
import type Store from 'planner-ember/services/store';

export default class IndexRoute extends Route {
  @service declare store: Store;

  async model(): Promise<ScheduleModel[]> {
    const { content } = await this.store.request(query('schedule'));
    console.log('INDEX :: ', content);
    return content.data;
  }
}
