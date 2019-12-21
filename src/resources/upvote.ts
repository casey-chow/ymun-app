import BaseResource from './base';

export default class UpvoteResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/items/upvotes';

  readonly post?: number;
}
