export default interface IFetchOptions {
  queryStrings?: string[];
  path?: string | string[];
  take?: number;
  skip?: number;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  headers?: HeadersInit | undefined;
  body?: Record<string | number | symbol, unknown>;
}
