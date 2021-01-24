export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  content: string;
  summary?: string;
  imageURL?: string;
  createdDate: number;
  published: boolean;
  likes?: number;
}

export interface BlogPostSimple {
  slug: string;
  title: string;
  category: string;
  summary?: string;
  imageURL?: string;
  createdDate: number;
  likes?: number;
}

export enum PostCategories {
  misc = 'MISC',
  trivia = 'TRIVIA',
  review = 'REVIEW',
  tech = 'TECH',
}
