import { BlogPost, BlogPostSimple } from "src/app/shared/models/post";

export interface AdminState {
  loaded: boolean;
  currentPost?: BlogPost;
  allPosts?: BlogPostSimple[];
  draftPosts?: BlogPostSimple[];
  publishedPosts?: BlogPostSimple[];
  error?: string | null;
}
