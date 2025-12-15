import Model, { attr } from '@ember-data/model';

export default class CategoryModel extends Model {
  @attr declare name: string;
  @attr declare colour: string;
}
