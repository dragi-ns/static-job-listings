import { useRef } from 'react';
import Job from './interfaces/Job';
import Header from './components/Header';
import Footer from './components/Footer';
import JobItem from './components/JobItem';
import processData from './utils/processData';
import DATA from './assets/data.json';

function App() {
  const jobs = useRef<Job[]>(processData(DATA));

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container flex flex-col gap-12 md:gap-14 lg:gap-7 py-16">
          {jobs.current.map((job, index) => (
            <JobItem key={index} job={job} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
