import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as ClientSelectors from './client.selectors';
import * as ClientActions from './client.actions';
import { ClientState } from './client.model';

@Injectable()
export class ClientFacade {
  loaded$ = this.store.pipe(select(ClientSelectors.getClientLoaded));
  error$ = this.store.pipe(select(ClientSelectors.getClientError));
  currentPost$ = this.store.pipe(select(ClientSelectors.getPost));
  allPosts$ = this.store.pipe(select(ClientSelectors.getAllPosts));
  
  constructor(private store: Store<ClientState>) {}

  loadAllPosts(): void {
    this.store.dispatch(ClientActions.loadAllPosts());
  }

  loadCategoryPosts(category: string): void {
    this.store.dispatch(ClientActions.loadCategoryPosts({category}));
  }

  clearCurrentPost(): void {
    this.store.dispatch(ClientActions.clearCurrentPost());
  }

  loadPost(slug: string): void {
    this.store.dispatch(ClientActions.loadPost({ slug }));
  }
}
