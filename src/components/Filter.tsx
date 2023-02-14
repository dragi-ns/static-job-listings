import { ReactNode } from 'react';
import FilterTablet from './FilterTablet';

interface FilterProps {
  onClick: () => void;
  children: ReactNode;
}

function Filter({ onClick, children }: FilterProps) {
  return (
    <li className="flex">
      <FilterTablet onClick={onClick}>{children}</FilterTablet>
    </li>
  );
}

export default Filter;
