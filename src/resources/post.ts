import { AbstractInstanceType } from 'rest-hooks/lib/types';
import BaseResource from './base';

export default class PostResource extends BaseResource {
  // static urlRoot = 'https://ymun-app.caseychow.org/_/items/posts';
  static urlRoot = 'https://ymun-app.caseychow.org/_/items/posts?fields=*.*';

  readonly id?: number;

  readonly status?: string;

  readonly created_by: {
    readonly id?: number | null;
    readonly firstName?: string | null;
    readonly lastName?: string | null;
    readonly avatar?: string | null;
    readonly faSecret?: string | null;
    readonly role?: number | null;
    readonly theme?: string | null;
  } = {
    id: 0,
    firstName: '',
    lastName: '',
    avatar: '',
    faSecret: '',
    role: 0,
    theme: '',
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
        )}?fields=*.*`;
      }
    }
    return `https://ymun-app.caseychow.org/_/items/posts?fields=*.*`;
  }

  pk(): number | undefined {
    return this.id;
  }
}
