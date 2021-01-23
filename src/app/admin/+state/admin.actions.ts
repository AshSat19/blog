import { createAction, props } from '@ngrx/store';
import { BlogPost, BlogPostSimple } from 'src/app/shared/models/post';

// Error action for API failure
export const apiFailure = createAction(
  '[Admin] API Failed',
  props<{ error: any }>()
);

// Set Current Post
export const setCurrentPost = createAction(
  '[Admin] Set Current Post',
  props<{ currentPost: BlogPost }>()
);

// Clear Current Post
export const clearCurrentPost = createAction('[Admin] Clear Current Post');

// Load All Posts
export const loadAllPosts = createAction('[Admin] Load All Posts');
export const loadAllPostsSuccess = createAction(
  '[Admin] Load All Posts Successful',
  props<{ allPosts: BlogPostSimple[] }>()
);

// Load Drafted Posts
export const loadDraftPosts = createAction('[Admin] Load Drafted Posts');
export const loadDraftPostsSuccess = createAction(
  '[Admin] Load Drafted Posts Successful',
  props<{ draftPosts: BlogPostSimple[] }>()
);

// Load Published Posts
export const loadPublishedPosts = createAction('[Admin] Load Published Posts');
export const loadPublishedPostsSuccess = createAction(
  '[Admin] Load Published Posts Successful',
  props<{ publishedPosts: BlogPostSimple[] }>()
);

// Load Post
export const loadPost = createAction(
  '[Admin] Load Post',
  props<{ postId: string }>()
);
export const loadPostSuccess = createAction(
  '[Admin] Load Post Successful',
  props<{ post: BlogPost }>()
);

// Create Post
export const createPost = createAction(
  '[Admin] Create Post',
  props<{ post: BlogPost }>()
);

// Update Post
export const updatePost = createAction(
  '[Admin] Update Post',
  props<{ post: BlogPost }>()
);

// Delete Post
export const deletePost = createAction(
  '[Admin] Delete Post',
  props<{ slug: string }>()
);
