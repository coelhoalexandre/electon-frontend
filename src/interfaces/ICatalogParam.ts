import ICatalogParamItem from './ICatalogParamItem';

export default interface ICatalogParam<T extends ICatalogParamItem> {
  list: T[];
  totalItems: number;
}
