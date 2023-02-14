import { ElementType, ReactNode } from 'react';
import classNames from '../utils/classNames';

interface PillProps {
  as?: ElementType;
  primary?: boolean;
  secondary?: boolean;
  children: ReactNode;
}

function Pill({ as = 'div', primary, secondary, children }: PillProps) {
  const As = as;

  return (
    <As
      className={classNames(
        primary && 'bg-dark-cyan',
        secondary && 'bg-very-dark-grayish-cyan',
        'text-white text-sm font-bold uppercase rounded-full px-2'
      )}>
      <span className="align-sub">{children}</span>
    </As>
  );
}

export default Pill;
