import { Resource, Method } from 'rest-hooks';

export default abstract class BaseResource extends Resource {
  static async fetch<T extends typeof Resource>(
    this: T,
    method: Method = 'get',
    url: string,
    body?: Readonly<object | string>
  ): Promise<object> {
    // Transform the return type to expose the raw data packaged by the API.
    return (await super.fetch(method, url, body)).data;
  }
}
