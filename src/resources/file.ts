import BaseResource from './base';

export interface Thumbnail {
  readonly url: string;
  readonly width: number;
  readonly height: number;
}

export default class FileResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/files';

  static fileRoot = 'https://ymun-app.caseychow.org';

  readonly type: string = '';

  readonly filename: string = '';

  readonly data: {
    readonly url: string;
    readonly thumbnails: Thumbnail[];
  } = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    url: '',
    thumbnails: [] as Thumbnail[],
  };

  get url(): string {
    return FileResource.fileRoot + this.data.url;
  }
}
