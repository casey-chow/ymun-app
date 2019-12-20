import { AbstractInstanceType } from 'rest-hooks/lib/types';
import BaseResource from './base';

export interface Thumbnail {
  readonly url: string;
  readonly width: number;
  readonly height: number;
}

export default class PostResource extends BaseResource {
  // static urlRoot = 'https://ymun-app.caseychow.org/_/items/posts';
  static urlRoot =
    'https://ymun-app.caseychow.org/_/items/posts?fields=*.*&sort=modified_on';

  readonly id?: number;

  readonly status?: string;

  readonly created_by: {
    readonly id?: number | null;
    readonly first_name?: string | null;
    readonly last_name?: string | null;
    readonly avatar?: string | null;
    readonly faSecret?: string | null;
    readonly role?: number | null;
    readonly theme?: string | null;
  } = {
    id: 0,
    /* eslint-disable @typescript-eslint/camelcase */
    first_name: '',
    last_name: '',
    /* eslint-enable @typescript-eslint/camelcase */
    avatar: '',
    faSecret: '',
    role: 0,
    theme: '',
  };

  readonly header_image: {
    readonly data: {
      readonly url: string;
      readonly thumbnails: Thumbnail[];
    };
  } = {
    data: {
      url: '',
      thumbnails: [] as Thumbnail[],
    },
  };

  readonly created_on?: string;

  readonly modified_on?: string;

  readonly title: string = '';

  readonly body: string = '';

  readonly author: string = '';

  readonly modified_by: number | null = null;

  static url<T extends typeof BaseResource>(
    this: T,
    urlParams?: { id: string } & Partial<AbstractInstanceType<T>>
  ): string {
    if (urlParams) {
      if (this.pk(urlParams) !== undefined) {
        return `https://ymun-app.caseychow.org/_/items/posts/${this.pk(
          urlParams
        )}?fields=*.*&sort=modified_on`;
      }
    }
    return `https://ymun-app.caseychow.org/_/items/posts?fields=*.*&sort=modified_on`;
  }

  pk(): number | undefined {
    return this.id;
  }
}
