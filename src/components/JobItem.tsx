import JobInterface from '../interfaces/Job';
import Pill from './Pill';
import Tablet from './Tablet';
import classNames from '../utils/classNames';
import { ReactNode } from 'react';
interface JobItemProps {
  job: JobInterface;
  addFilter: (filter: string) => void;
}

function JobItem({ job, addFilter }: JobItemProps) {
  return (
    <div
      className={classNames(
        'flex flex-col lg:flex-row lg:items-center bg-white rounded-md px-5 lg:px-7 xl:px-10 pt-10 md:pt-12 lg:py-8 pb-6 relative shadow-xl shadow-dark-cyan/20',
        job.featured && 'border-l-4 border-l-dark-cyan'
      )}>
      <JobItemImage logo={job.logo} company={job.company}></JobItemImage>
      <JobItemInfo job={job} />
      <hr className="border-[1px] border-dark-grayish-cyan/30 my-4 lg:hidden" />
      <JobItemCategories>
        {[...job.categories].map((category, index) => (
          <li key={index}>
            <Tablet onClick={() => addFilter(category)}>{category}</Tablet>
          </li>
        ))}
      </JobItemCategories>
    </div>
  );
}

interface JobItemImageProps {
  logo: string;
  company: string;
}

function JobItemImage({ logo, company }: JobItemImageProps) {
  return (
    <figure className="absolute lg:static top-0 -translate-y-1/2 lg:translate-y-0 left-5 lg:mr-6">
      <img className="w-14 md:w-16 lg:w-[5.5rem]" src={logo} alt={company} />
    </figure>
  );
}

interface JobItemInfoProps {
  job: JobInterface;
}

function JobItemInfo({ job }: JobItemInfoProps) {
  return (
    <div className="flex flex-col gap-3 lg:gap-2">
      <div className="flex items-center">
        <p className="text-dark-cyan lg:text-base font-bold mr-6 lg:mr-4">
          {job.company}
        </p>
        {(job.new || job.featured) && (
          <ul className="flex items-center gap-2">
            {job.new && (
              <Pill primary as="li">
                New
              </Pill>
            )}
            {job.featured && (
              <Pill secondary as="li">
                Featured
              </Pill>
            )}
          </ul>
        )}
      </div>

      <h2 className=" font-bold sm:text-base lg:text-xl">
        <a
          className="text-very-dark-grayish-cyan hover:text-dark-cyan transition-colors"
          href="#">
          {job.position}
        </a>
      </h2>

      <ul className="flex text-dark-grayish-cyan -mt-1 lg:mt-0">
        <li className="[&:not(:last-child)]:after:content-['•'] [&:not(:last-child)]:after:px-2 lg:[&:not(:last-child)]:after:px-3">
          {job.postedAt}
        </li>
        <li className="[&:not(:last-child)]:after:content-['•'] [&:not(:last-child)]:after:px-2 lg:[&:not(:last-child)]:after:px-3">
          {job.contract}
        </li>
        <li className="[&:not(:last-child)]:after:content-['•'] [&:not(:last-child)]:after:px-2 lg:[&:not(:last-child)]:after:px-3">
          {job.location}
        </li>
      </ul>
    </div>
  );
}

interface JobItemCategoriesProps {
  children: ReactNode;
}

function JobItemCategories({ children }: JobItemCategoriesProps) {
  return <ul className="flex flex-wrap gap-4 lg:ml-auto">{children}</ul>;
}

export default JobItem;
