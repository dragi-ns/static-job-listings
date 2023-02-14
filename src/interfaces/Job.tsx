interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  categories: Set<string>;
}

export default Job;
