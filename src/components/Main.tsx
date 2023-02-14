import { useEffect, useRef, useState } from 'react';
import JobInterface from '../interfaces/Job';
import JobItem from './JobItem';
import JobItems from './JobItems';
import Filter from './Filter';
import Filters from './Filters';
import processData from '../utils/processData';
import classNames from '../utils/classNames';
import DATA from '../assets/data.json';

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
  }, [jobs, filters]);

  return (
    <main className="flex-1 relative">
      <div
        className={classNames(
          'container py-16',
          filters.size > 0 ? 'pt-0' : 'pt-16'
        )}>
        {filters.size > 0 && (
          <Filters removeFilters={removeFilters}>
            {[...filters].map((filter, index) => (
              <Filter key={index} onClick={() => removeFilter(filter)}>
                {filter}
              </Filter>
            ))}
          </Filters>
        )}

        <JobItems>
          {filteredJobs.map((job, index) => (
            <JobItem key={index} job={job} addFilter={addFilter} />
          ))}
        </JobItems>
      </div>
    </main>
  );
}

export default Main;
