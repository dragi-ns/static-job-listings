import { ElementType, ReactNode } from 'react';
import classNames from '../utils/classNames';

interface TabletProps {
  as?: ElementType;
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

function Tablet({
  as = 'button',
  hoverable = true,
  className,
  onClick,
  children,
}: TabletProps) {
  const As = as;

  return (
    <As
      {...(onClick && { onClick })}
      className={classNames(
        'inline-block bg-light-grayish-cyan-tbls text-dark-cyan  text-sm font-bold px-3 py-1 rounded-md',
        hoverable && 'hover:bg-dark-cyan hover:text-white transition-colors',
        className
      )}>
      <span className="align-sub">{children}</span>
    </As>
  );
}

export default Tablet;
