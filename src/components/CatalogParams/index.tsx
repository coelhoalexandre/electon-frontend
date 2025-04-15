import ParamsSection from './ParamsSection';

export default function CatalogParams() {
  return (
    <aside className='flex flex-col w-xs'>
      <ParamsSection endpoint='categories' title='Categories' />
    </aside>
  );
}
