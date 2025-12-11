import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { findRecord } from '@ember-data/json-api/request';

import type ScheduleModel from 'planner-ember/models/schedule';
import type Store from 'planner-ember/services/store';

export default class ScheduleRoute extends Route {
  @service declare store: Store;

  async model(params: Record<string, unknown>): Promise<ScheduleModel> {
    const { content } = await this.store.request(
      findRecord('schedule', params.id)
    );
    console.log('SCHEDULE :: ', content);
    return content.data;
  }
}
