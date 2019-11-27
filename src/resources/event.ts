import BaseResource from './base';
import LocationResource from './location';

export default class EventResource extends BaseResource {
  static urlRoot = 'https://ymun-app-api.caseychow.org/_/items/events';

  readonly status?: string;

  readonly title: string = '';

  readonly description: string = '';

  readonly start_time: string = '';

  readonly end_time: string = '';

  readonly location?: LocationResource;
}
