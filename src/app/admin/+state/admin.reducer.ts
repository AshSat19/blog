import { createReducer, on, Action } from '@ngrx/store';
import { BlogPostSimple, PostCategories } from 'src/app/shared/models/post';

import * as PostsAdminActions from './admin.actions';
import { AdminState } from './admin.model';

export const ADMIN_FEATURE_KEY = 'admin';

export const initialState: AdminState = {
  loaded: false,
  currentPost: {
    slug: '',
    title: '',
    category: PostCategories.misc,
    content: '',
    imageURL: '',
    createdDate: Date.now(),
    published: false,
  },
  allPosts: [],
  draftPosts: [],
  publishedPosts: [],
};

const postsAdminReducer = createReducer(
  initialState,
  // change state when API Fails
  on(PostsAdminActions.apiFailure, (state, { error }) => ({ ...state, error })),

  // Update state to set current post
  on(PostsAdminActions.setCurrentPost, (state, action) => ({
    ...state,
    currentPost: action.currentPost,
  })),

  // Update state to clear current post
  on(PostsAdminActions.clearCurrentPost, (state, action) => ({
    ...state,
    ...initialState,
  })),

  // Load All Posts
  on(PostsAdminActions.loadAllPosts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    PostsAdminActions.loadAllPostsSuccess,
    (state, { allPosts }: { allPosts: BlogPostSimple[] }) => ({
      ...state,
      allPosts,
      loaded: true,
    })
  ),

  // Load Drafted Posts
  on(PostsAdminActions.loadDraftPosts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    PostsAdminActions.loadDraftPostsSuccess,
    (state, { draftPosts }: { draftPosts: BlogPostSimple[] }) => ({
      ...state,
      draftPosts,
      loaded: true,
    })
  ),

  // Load Published Posts
  on(PostsAdminActions.loadPublishedPosts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    PostsAdminActions.loadPublishedPostsSuccess,
    (state, { publishedPosts }: { publishedPosts: BlogPostSimple[] }) => ({
      ...state,
      publishedPosts,
      loaded: true,
    })
  ),

  // Create Post
  on(PostsAdminActions.createPost, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  // Update Post
  on(PostsAdminActions.updatePost, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  // Delete Post
  on(PostsAdminActions.deletePost, (state) => ({
    ...state,
    loaded: false,
    error: null,
  }))
);

export function reducer(state: AdminState | undefined, action: Action): any {
  return postsAdminReducer(state, action);
}
