import { FC } from 'react';

interface IFilterTag {
  value: string;
}

const FilterTag: FC<IFilterTag> = ({ value }) => {
  return (
    <div className="cursor-pointer rounded-full bg-slate-200 px-3 py-1 text-sm dark:bg-slate-500 hover:dark:bg-slate-600">
      {value}
    </div>
  );
};

const BlogFilter = () => {
  return (
    <>
      <div className="mx-4 border-b-2 border-stone-200 dark:border-stone-600">
        <p className="text-lg leading-normal"># 標籤</p>
        <div className="flex flex-col items-start gap-4 py-4 px-4">
          <FilterTag value="React" />
          <FilterTag value="職涯" />
        </div>
      </div>
    </>
  );
};

export default BlogFilter;