import { ReactNode } from 'react';
import Tablet from './Tablet';
import IconRemove from '../assets/images/icon-remove.svg';

interface FilterTabletProps {
  onClick: () => void;
  children: ReactNode;
}

function FilterTablet({ onClick, children }: FilterTabletProps) {
  return (
    <>
      <Tablet as="span" hoverable={false} className="rounded-r-none">
        {children}
      </Tablet>
      <button
        onClick={onClick}
        className="bg-dark-cyan hover:bg-very-dark-grayish-cyan text-white px-2 pt-[.15rem] rounded-r-md"
        aria-label="Remove Filter">
        <img src={IconRemove} alt="" aria-hidden="true" />
      </button>
    </>
  );
}

export default FilterTablet;
