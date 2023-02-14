import Job from '../interfaces/Job';
import ResponseItem from '../interfaces/ResponseItem';

function processData(data: ResponseItem[]): Job[] {
  return data.map((job) => {
    return {
      id: job.id,
      company: job.company,
      logo: job.logo,
      new: job.new,
      featured: job.featured,
      position: job.position,
      postedAt: job.postedAt,
      contract: job.contract,
      location: job.location,
      categories: new Set<string>([
        job.role,
        job.level,
        ...job.languages,
        ...job.tools,
      ]),
    };
  });
}

export default processData;
