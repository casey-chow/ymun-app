import BaseResource from './base';

export default class LocationResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/items/locations';

  readonly name: string = '';

  readonly map?: number = 0;
}
