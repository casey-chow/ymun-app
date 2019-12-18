import BaseResource from './base';

export default class PostResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/items/posts';

  readonly id?: number;

  readonly status?: string;

  //   Readonly created_by: UserResource;

  readonly created_on?: string;

  readonly modified_on?: string;

  readonly title: string = '';

  readonly body: string = '';

  readonly author: string = '';

  readonly modified_by: number | null = null;

  pk(): number | undefined {
    return this.id;
  }
}
