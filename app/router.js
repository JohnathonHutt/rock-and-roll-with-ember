import EmberRouter from '@ember/routing/router';
import config from 'rock-and-roll/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('bands', { path: '/' }, function () {
    this.route('band', { path: 'bands/:id' }, function () {
      this.route('songs');
      this.route('details');
    });
    this.route('new');
  });
});
