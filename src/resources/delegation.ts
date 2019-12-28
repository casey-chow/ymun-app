import BaseResource from './base';

export default class DelegationResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/items/delegations';

  readonly name: string = '';

  /** Refers to the id of a location. */
  readonly meeting_location: number = 0;
}
