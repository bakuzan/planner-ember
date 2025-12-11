import Model, { attr } from '@ember-data/model';

export default class ScheduleModel extends Model {
  @attr declare name: string;
  @attr declare description: string;
}
