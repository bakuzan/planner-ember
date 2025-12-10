import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return await Promise.resolve([
      {
        schedule_id: 1,
        name: 'Test Schedule',
      },
      {
        schedule_id: 2,
        name: 'Another Schedule',
      },
      {
        schedule_id: 3,
        name: 'Third Schedule',
      },
    ]);
  }
}
