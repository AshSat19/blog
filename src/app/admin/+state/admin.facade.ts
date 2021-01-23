import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as AdminSelectors from './admin.selectors';
import * as AdminActions from './admin.actions';
import { AdminState } from './admin.model';
import { BlogPost } from 'src/app/shared/models/post';

@Injectable()
export class AdminFacade {
  loaded$ = this.store.pipe(select(AdminSelectors.getAdminLoaded));
  error$ = this.store.pipe(select(AdminSelectors.getAdminError));
  currentPost$ = this.store.pipe(select(AdminSelectors.getPost));
  allPosts$ = this.store.pipe(select(AdminSelectors.getAllPosts));
  draftPosts$ = this.store.pipe(select(AdminSelectors.getDraftPosts));
  publishedPosts$ = this.store.pipe(select(AdminSelectors.getPublishedPosts));

  constructor(private store: Store<AdminState>) {}

  loadAllPosts(): void {
    this.store.dispatch(AdminActions.loadAllPosts());
  }

  loadDraftPosts(): void {
    this.store.dispatch(AdminActions.loadDraftPosts());
  }

  loadPublishedPosts(): void {
    this.store.dispatch(AdminActions.loadPublishedPosts());
  }

  setCurrentPost(currentPost: BlogPost): void {
    this.store.dispatch(AdminActions.setCurrentPost({ currentPost }));
  }

  clearCurrentPost(): void {
    this.store.dispatch(AdminActions.clearCurrentPost());
  }

  loadPost(postId: string): void {
    this.store.dispatch(AdminActions.loadPost({ postId }));
  }

  createPost(post: BlogPost): void {
    this.store.dispatch(AdminActions.createPost({ post }));
  }

  updatePost(post: BlogPost): void {
    this.store.dispatch(AdminActions.updatePost({ post }));
  }

  deletePost(slug: string): void {
    this.store.dispatch(AdminActions.deletePost({ slug }));
  }
}
