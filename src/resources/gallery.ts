import BaseResource from './base';

export interface Thumbnail {
  readonly url: string;
  readonly width: number;
  readonly height: number;
}

export default class GalleryResource extends BaseResource {
  static urlRoot =
    'https://ymun-app.caseychow.org/_/items/gallery_photos?fields=*.*&sort=-modified_on';

  readonly id: number = 0;

  readonly type: string = '';

  readonly filename: string = '';

  readonly caption?: string = '';

  readonly photo: {
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

  pk(): number | undefined {
    return this.id;
  }
}
