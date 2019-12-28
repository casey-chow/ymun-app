import BaseResource from './base';

export default class UserResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/users';

  readonly first_name: string = '';

  readonly last_name: string = '';

  /** The ID of a file to serve as the user avatar. */
  readonly avatar: number | null = null;
}
