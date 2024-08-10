interface Movie {
  title: string;
  released: string;
}

export interface Person {
  id: string;
  name: string;
  show: string;
  actor: string;
  movies: Movie[];
  dob: string;
  updatedAt: string;
}
