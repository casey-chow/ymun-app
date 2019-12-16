import BaseResource from './base';

export interface Category {
  title?: string;
  body?: string;
}

export default class ResourcePageResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/items/resource_pages';

  readonly sort?: number;

  readonly title: string = '';

  readonly body?: string;

  readonly categories?: Category[];
}
