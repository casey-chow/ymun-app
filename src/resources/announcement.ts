import BaseResource from './base';

export default class TextResource extends BaseResource {
  static urlRoot =
    'https://ymun-app.caseychow.org/_/items/announcements?fields=*.*&sort=modified_on';

  readonly body: string = '';

  readonly id?: number;

  readonly created_by: {
    readonly id: number;
    readonly first_name: string;
    readonly last_name: string;
    readonly avatar: string;
    readonly faSecret: string;
    readonly role: number;
    readonly theme: string;
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

  pk(): number | undefined {
    return this.id;
  }
}
