import Route from '@ember/routing/route';

export default class ScheduleRoute extends Route {
  async model(params: Record<string, unknown>) {
    return await Promise.resolve({
      schedule_id: params.schedule_id,
      name: 'Test Schedule',
      description:
        'A test schedule that is hard-coded so I can build up a UI to start with.',
    });
  }
}
