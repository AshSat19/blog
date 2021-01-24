import { createAction, props } from '@ngrx/store';
import { BlogPost, BlogPostSimple } from 'src/app/shared/models/post';

// Error action for API failure
export const apiFailure = createAction(
  '[Client] API Failed',
  props<{ error: any }>()
);

// Clear Current Post
export const clearCurrentPost = createAction('[Client] Clear Current Post');

// Clear Posts
export const clearPosts = createAction('[Client] Clear Posts');

// Load All Posts
export const loadAllPosts = createAction('[Client] Load All Posts');
export const loadAllPostsSuccess = createAction(
  '[Client] Load All Posts Successful',
  props<{ allPosts: BlogPostSimple[] }>()
);

// Search Posts
export const searchPosts = createAction(
  '[Client] Search Posts',
  props<{ searchString: string; category?: string }>()
);
export const searchPostsSuccess = createAction(
  '[Client] Search Posts Successful',
  props<{ allPosts: BlogPostSimple[] }>()
);

// Load Category Posts
export const loadCategoryPosts = createAction(
  '[Client] Load Category Posts',
  props<{ category: string }>()
);
export const loadCategoryPostsSuccess = createAction(
  '[Client] Load Category Posts Successful',
  props<{ allPosts: BlogPostSimple[] }>()
);

// Load Post
export const loadPost = createAction(
  '[Client] Load Post',
  props<{ slug: string }>()
);
export const loadPostSuccess = createAction(
  '[Client] Load Post Successful',
  props<{ currentPost: BlogPost }>()
);
