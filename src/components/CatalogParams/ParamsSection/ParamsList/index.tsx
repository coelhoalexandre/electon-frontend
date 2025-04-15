import { fetchCatalogParams } from '@/common/fetchData';
import Text from '@/components/Text';
import CatalogEndpoints from '@/types/CatalogEndpoints';
import CatalogParamCheckbox from './CatalogParamCheckbox';

interface ParamsListProps {
  endpoint: CatalogEndpoints;
}

export default async function ParamsList({ endpoint }: ParamsListProps) {
  const data = await fetchCatalogParams(endpoint);

  return (
    <ul className='flex flex-col gap-3'>
      {data.list.map((item) => (
        <li
          key={item.id}
          className='grid grid-cols-[auto_1fr_auto] gap-x-2.5 items-center'
        >
          <CatalogParamCheckbox id={item.slug} param={endpoint} />
          <Text size={'base'}>{item.name}</Text>
          <Text as='span' size={'base'}>
            {item.totalItems}
          </Text>
        </li>
      ))}
    </ul>
  );
}
