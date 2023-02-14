import { ReactNode } from 'react';

interface TabletProps {
  children: ReactNode;
}

function Tablet({ children }: TabletProps) {
  return (
    <button className="bg-light-grayish-cyan-tbls hover:bg-dark-cyan text-dark-cyan text-sm hover:text-white font-bold px-3 py-1 rounded-md">
      <span className="align-sub">{children}</span>
    </button>
  );
}

export default Tablet;
