import BaseResource from './base';

export default class ResourceCategoryResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/items/resource_categories';

  readonly sort?: number;

  readonly icon: number | null = null;

  readonly name: string = '';

  readonly description?: string;

  readonly pages: number[] = [];

  readonly clickthrough_url?: string;
}
