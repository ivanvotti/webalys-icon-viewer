import Route from 'ember-route';
import service from 'ember-service/inject';
import { isNotFoundError } from 'ember-ajax/errors';

export default Route.extend({
  ajax: service(),

  model() {
    return this.get('ajax').request('/icons.json')
      .catch((error) => {
        if (isNotFoundError(error)) {
          return { assets: [] };
        }

        throw error;
      });
  }
});
