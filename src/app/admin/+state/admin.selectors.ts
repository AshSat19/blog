import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ADMIN_FEATURE_KEY } from './admin.reducer';
import { AdminState } from './admin.model';

export const getAdminState = createFeatureSelector<AdminState>(
  ADMIN_FEATURE_KEY
);

export const getAdminLoaded = createSelector(
  getAdminState,
  (state: AdminState) => state.loaded
);

export const getAdminError = createSelector(
  getAdminState,
  (state: AdminState) => state.error
);

export const getPost = createSelector(
  getAdminState,
  (state: AdminState) => state.currentPost
);

export const getAllPosts = createSelector(
  getAdminState,
  (state: AdminState) => state.allPosts
);

export const getDraftPosts = createSelector(
  getAdminState,
  (state: AdminState) => state.draftPosts
);

export const getPublishedPosts = createSelector(
  getAdminState,
  (state: AdminState) => state.publishedPosts
);
