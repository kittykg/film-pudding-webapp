interface Link {
  icon: string;
  href: string;
}

export interface AboutCard {
  title: string;
  mainInfo: string;
  links: Array<Link>;
}
