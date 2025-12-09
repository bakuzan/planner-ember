import Route from '@ember/routing/route';

export default class RentalRoute extends Route {
  async model(params: Record<string, unknown>) {
    return {
      id: params.scheduleId,
      name: 'Test Schedule',
      description:
        'A test schedule that is hard-coded so I can build up a UI to start with.',
    };
  }
}
