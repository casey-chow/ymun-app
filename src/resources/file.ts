import BaseResource from './base';

export interface Thumbnail {
  readonly url: string;
  readonly width: number;
  readonly height: number;
}

export default class FileResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/files';

  readonly type: string = '';

  readonly filename: string = '';

  readonly data: {
    readonly url: string;
    readonly thumbnails: Thumbnail[];
  } = {
    url: '',
    thumbnails: [] as Thumbnail[],
  };
}
