import Model, { attr } from '@ember-data/model';

export default class ScheduleModel extends Model {
  @attr schedule_id;
  @attr name;
  @attr description;
}
