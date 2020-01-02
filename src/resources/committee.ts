import BaseResource from './base';

export default class CommitteeResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/items/committees';

  readonly name: string = '';

  /** Refers to the id of a location. */
  readonly location: number = 0;

  readonly officers: string = '';

  readonly staffers: string = '';

  readonly topic_description_url?: string;

  readonly misc?: string;
}
