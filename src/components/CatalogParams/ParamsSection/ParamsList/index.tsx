import Text from '@/components/Text';
import CatalogParamCheckbox from './CatalogParamCheckbox';
import ICatalogParamItem from '@/interfaces/ICatalogParamItem';

interface ParamsListProps {
  fetchParamsFn: () => Promise<ICatalogParamItem[]>;
  searchParamKey: string;
}

export default async function ParamsList({
  fetchParamsFn,
  searchParamKey,
}: ParamsListProps) {
  const data = await fetchParamsFn();
  return (
    <ul className='flex flex-col gap-3'>
      {data.map((item) => (
        <li
          key={item.id}
          className='grid grid-cols-[auto_1fr_auto] gap-x-2.5 items-center'
        >
          <CatalogParamCheckbox
            id={item.slug}
            searchParamKey={searchParamKey}
          />
          <Text size={'base'}>{item.name}</Text>
          <Text as='span' size={'base'}>
            {item.totalItems}
          </Text>
        </li>
      ))}
    </ul>
  );
}
