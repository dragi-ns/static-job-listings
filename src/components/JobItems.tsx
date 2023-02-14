import { ReactNode } from 'react';

interface JobItemsProps {
  children: ReactNode;
}

function JobItems({ children }: JobItemsProps) {
  return (
    <div className="flex flex-col gap-12 md:gap-14 lg:gap-7">{children}</div>
  );
}

export default JobItems;
