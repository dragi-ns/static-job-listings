import { useEffect, useRef, useState } from 'react';
import JobInterface from '../interfaces/Job';
import JobItem from './JobItem';
import JobItems from './JobItems';
import Filter from './Filter';
import Filters from './Filters';
import processData from '../utils/processData';
import DATA from '../assets/data.json';
import { AnimatePresence } from 'framer-motion';

function Main() {
  const jobs = useRef<JobInterface[]>(processData(DATA));
  const [filters, setFilters] = useState(new Set<string>());
  const [filteredJobs, setFilteredJobs] = useState<JobInterface[]>(
    jobs.current
  );

  const addFilter = (filter: string) => {
    if (filters.has(filter)) {
      return;
    }
    setFilters((prevFilters: Set<string>) => new Set(prevFilters.add(filter)));
  };

  const removeFilter = (filter: string) => {
    if (!filters.has(filter)) {
      return;
    }
    setFilters((prevFilters: Set<string>) => {
      prevFilters.delete(filter);
      return new Set(prevFilters);
    });
  };

  const removeFilters = () => {
    if (filters.size < 1) {
      return;
    }
    setFilters(new Set<string>());
  };

  useEffect(() => {
    setFilteredJobs(
      jobs.current.filter((job) => {
        for (const filter of filters) {
          if (!job.categories.has(filter)) {
            return false;
          }
        }
        return true;
      })
    );

    window.scrollTo(0, 0);
  }, [jobs, filters]);

  return (
    <main className="flex-1 relative">
      <div className="container pb-16">
        <Filters
          {...(filters.size > 0
            ? { className: 'visible opacity-100' }
            : { className: 'invisible opacity-0 ' })}
          removeFilters={removeFilters}>
          <AnimatePresence initial={false}>
            {[...filters].map((filter) => (
              <Filter key={filter} onClick={() => removeFilter(filter)}>
                {filter}
              </Filter>
            ))}
          </AnimatePresence>
        </Filters>

        <JobItems>
          <AnimatePresence>
            {filteredJobs.map((job, index) => (
              <JobItem
                key={job.id}
                index={index}
                job={job}
                addFilter={addFilter}
              />
            ))}
          </AnimatePresence>
        </JobItems>
      </div>
    </main>
  );
}

export default Main;
