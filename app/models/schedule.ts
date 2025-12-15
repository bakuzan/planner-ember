import Model, { attr, hasMany } from '@ember-data/model';

export default class ScheduleModel extends Model {
  @attr declare name: string;
  @attr declare description: string;

  @hasMany('time-block', { async: false, inverse: 'schedule' }) timeBlocks;
}
