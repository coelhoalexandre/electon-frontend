import { fetchParamCategories } from '@/utils/fetchData';
import ParamsSection from './ParamsSection';
import ParamsList from './ParamsSection/ParamsList';

export default function CatalogParams() {
  return (
    <aside className='hidden md:flex flex-col w-xs'>
      <ParamsSection title='Categories'>
        <ParamsList
          fetchParamsFn={fetchParamCategories}
          searchParamKey='categories'
        />
      </ParamsSection>
    </aside>
  );
}
