import BaseResource from './base';

export default class CountryResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/items/countries';

  readonly name: string = '';

  /** Refers to the id of a location. */
  readonly country_caucus_location: number = 0;
}
