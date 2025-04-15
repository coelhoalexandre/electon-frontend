import ICatalogParamItem from './ICatalogParamItem';

export default interface ICategory extends ICatalogParamItem {
  src: string;
  isVisible: boolean;
}
