import BaseResource from './base';

export interface Thumbnail {
  readonly url: string;
  readonly width: number;
  readonly height: number;
}

export default class PostResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/items/posts';

  readonly id?: number;

  readonly status?: string;

  readonly created_by: number | null = null;

  /** The id of a FileResource that serves as the header image. */
  readonly header_image?: number | null = null;

  readonly created_on?: string;

  readonly modified_on?: string;

  readonly title: string = '';

  readonly body: string = '';

  readonly author: string = '';

  readonly modified_by: number | null = null;
}
