import BaseRequestManager from '@ember-data/request';
import Fetch from '@ember-data/request/fetch';

export default class RequestManager extends BaseRequestManager {
  constructor(args: unknown) {
    super(args);

    this.use([Fetch]);
  }
}
