import Route from '@ember/routing/route';
import type ScheduleModel from 'planner-ember/models/schedule';

export default class ScheduleRoute extends Route {
  async model(params: Record<string, unknown>): Promise<ScheduleModel> {
    return await Promise.resolve({
      schedule_id: Number(params.schedule_id),
      name: 'Test Schedule',
      description:
        'A test schedule that is hard-coded so I can build up a UI to start with.',
    });
  }
}
