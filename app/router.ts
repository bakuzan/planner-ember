import EmberRouter from '@embroider/router';
import config from 'planner-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('schedule', { path: '/schedule/:id' });
});
