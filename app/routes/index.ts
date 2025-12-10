import Route from '@ember/routing/route';
import type ScheduleModel from 'planner-ember/models/schedule';

export default class IndexRoute extends Route {
  async model(): Promise<ScheduleModel[]> {
    return await Promise.resolve([
      {
        schedule_id: 1,
        name: 'Test Schedule',
        description:
          'A test schedule that is hard-coded so I can build up a UI to start with.',
      },
      {
        schedule_id: 2,
        name: 'Another Schedule',
        description:
          'Another schedule that is hard-coded so I can build up a UI to start with.',
      },
      {
        schedule_id: 3,
        name: 'Third Schedule',
        description:
          'Yet a third schedule that is hard-coded so I can build up a UI to start with.',
      },
    ]);
  }
}
