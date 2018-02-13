import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const __Router = Router.extend({
  location: config.locationType
});

__Router.map(function() {
});

export default __Router;
