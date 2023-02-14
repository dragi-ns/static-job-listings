import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import classNames from '../utils/classNames';

interface FiltersProps {
  removeFilters: () => void;
  className?: string;
  children: ReactNode;
}

function Filters({ removeFilters, className, children }: FiltersProps) {
  return (
    <div
      className={classNames(
        'relative left-0 right-0 -top-9 pb-6 transition-all',
        className
      )}>
      <div className="flex items-center gap-5 bg-white rounded-md shadow-xl shadow-dark-cyan/20 p-5">
        <div className="flex-1">
          <ul className="flex flex-wrap gap-4">{children}</ul>
        </div>
        <button
          onClick={removeFilters}
          className="self-center px-2 pt-1 font-bold text-base text-dark-grayish-cyan hover:text-dark-cyan hover:underline transition-all">
          <span className="align-sub">Clear</span>
        </button>
      </div>
    </div>
  );
}

export default Filters;
