import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import FilterTablet from './FilterTablet';

interface FilterProps {
  onClick: () => void;
  children: ReactNode;
}

function Filter({ onClick, children }: FilterProps) {
  return (
    <motion.li
      layout
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      exit={{ scale: 0 }}
      className="flex">
      <FilterTablet onClick={onClick}>{children}</FilterTablet>
    </motion.li>
  );
}

export default Filter;
