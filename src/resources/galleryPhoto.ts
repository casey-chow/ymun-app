import BaseResource from './base';

export interface Thumbnail {
  readonly url: string;
  readonly width: number;
  readonly height: number;
}

export default class GalleryPhotosResource extends BaseResource {
  static urlRoot = 'https://ymun-app.caseychow.org/_/items/gallery_photos';

  /** The id of the user that created the photo. */
  readonly created_by: number | null = null;

  readonly caption?: string = '';

  /** The id of the photo file. */
  readonly photo: number | null = null;
}
