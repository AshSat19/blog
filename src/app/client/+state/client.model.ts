import { BlogPost, BlogPostSimple } from "src/app/shared/models/post";

export interface ClientState {
  loaded: boolean;
  currentPost?: BlogPost;
  allPosts?: BlogPostSimple[];
  error?: string | null;
}
