import Model, { attr, belongsTo } from '@ember-data/model';

export default class TimeBlockModel extends Model {
  @attr declare start: string;
  @attr declare end: string;

  @belongsTo('schedule', { async: false, inverse: 'timeBlocks' }) schedule;
  @belongsTo('category', { async: false, inverse: null }) category;
}
