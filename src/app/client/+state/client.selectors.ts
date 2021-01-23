import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CLIENT_FEATURE_KEY } from './client.reducer';
import { ClientState } from './client.model';

export const getClientState = createFeatureSelector<ClientState>(
  CLIENT_FEATURE_KEY
);

export const getClientLoaded = createSelector(
  getClientState,
  (state: ClientState) => state.loaded
);

export const getClientError = createSelector(
  getClientState,
  (state: ClientState) => state.error
);

export const getPost = createSelector(
  getClientState,
  (state: ClientState) => state.currentPost
);

export const getAllPosts = createSelector(
  getClientState,
  (state: ClientState) => state.allPosts
);
