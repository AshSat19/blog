import { createReducer, on, Action } from '@ngrx/store';
import {
  BlogPost,
  BlogPostSimple,
  PostCategories,
} from 'src/app/shared/models/post';

import * as PostsClientActions from './client.actions';
import { ClientState } from './client.model';

export const CLIENT_FEATURE_KEY = 'client';

export const initialState: ClientState = {
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
};

const postsClientReducer = createReducer(
  initialState,
  // change state when API Fails
  on(PostsClientActions.apiFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  // Update state to clear current post
  on(PostsClientActions.clearCurrentPost, (state, action) => ({
    ...state,
    currentPost: {
      slug: '',
      title: '',
      category: PostCategories.misc,
      content: '',
      imageURL: '',
      createdDate: Date.now(),
      published: false,
    },
  })),

  // Update state to clear posts
  on(PostsClientActions.clearPosts, (state, action) => ({
    ...state,
    allPosts: [],
  })),

  // Load All Posts
  on(PostsClientActions.loadAllPosts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    PostsClientActions.loadAllPostsSuccess,
    (state, { allPosts }: { allPosts: BlogPostSimple[] }) => ({
      ...state,
      allPosts,
      loaded: true,
    })
  ),

  // Load All Posts
  on(PostsClientActions.searchPosts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    PostsClientActions.searchPostsSuccess,
    (state, { allPosts }: { allPosts: BlogPostSimple[] }) => ({
      ...state,
      allPosts,
      loaded: true,
    })
  ),

  // Load Category Posts
  on(PostsClientActions.loadCategoryPosts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    PostsClientActions.loadCategoryPostsSuccess,
    (state, { allPosts }: { allPosts: BlogPostSimple[] }) => ({
      ...state,
      allPosts,
      loaded: true,
    })
  ),

  // Load Post
  on(PostsClientActions.loadPost, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    PostsClientActions.loadPostSuccess,
    (state, { currentPost }: { currentPost: BlogPost }) => ({
      ...state,
      currentPost,
      loaded: true,
    })
  ),

  // Like Post
  on(PostsClientActions.likePost, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    PostsClientActions.likePostSuccess,
    (state, { currentPost }: { currentPost: BlogPost }) => ({
      ...state,
      currentPost,
      loaded: true,
    })
  )
);

export function reducer(state: ClientState | undefined, action: Action): any {
  return postsClientReducer(state, action);
}
