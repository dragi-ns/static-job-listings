function classNames(...args: any[]) {
  return args.filter(Boolean).join(' ');
}

export default classNames;
