import { ReactNode } from 'react';

interface FiltersProps {
  removeFilters: () => void;
  children: ReactNode;
}

function Filters({ removeFilters, children }: FiltersProps) {
  return (
    <div className="relative left-0 right-0 -top-9 pb-6">
      <div className="flex items-center gap-5 bg-white rounded-md shadow-xl shadow-dark-cyan/20 p-5">
        <div className="flex-1">
          <ul className="flex flex-wrap gap-4">{children}</ul>
        </div>
        <button
          onClick={removeFilters}
          className="self-center px-2 pt-1 font-bold text-base text-dark-grayish-cyan hover:text-dark-cyan hover:underline transition-all">
          Clear
        </button>
      </div>
    </div>
  );
}

export default Filters;
