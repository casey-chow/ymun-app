import BaseResource from './base';

export default class MapResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/items/maps';

  readonly name: string = '';

  /** Refers to a FileResource id. */
  readonly attachment?: number = 0;
}
