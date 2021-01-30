import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { AdminState } from './admin.model';
import * as AdminActions from './admin.actions';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { BlogPost, BlogPostSimple } from 'src/app/shared/models/post';
import { DataPersistence } from '@nrwl/angular';

@Injectable()
export class AdminEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store<AdminState>,
    private dataPersistence: DataPersistence<AdminState>,
    private service: AdminService
  ) {}

  // API call to load drafted posts
  loadDraftedPosts$ = createEffect(() =>
    this.dataPersistence.fetch(AdminActions.loadDraftPosts, {
      run: (
        action: ReturnType<typeof AdminActions.loadDraftPosts>,
        state: AdminState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        this.service
          .getDraftPosts()
          .subscribe((draftPosts: BlogPostSimple[]) => {
            return this.store.dispatch(
              AdminActions.loadDraftPostsSuccess({ draftPosts })
            );
          });
      },

      onError: (
        action: ReturnType<typeof AdminActions.loadDraftPosts>,
        error
      ) => {
        console.error('Error', error);
        return this.store.dispatch(AdminActions.apiFailure({ error }));
      },
    })
  );

  // API call for uploading featured image
  loadPublishedPosts$ = createEffect(() =>
    this.dataPersistence.fetch(AdminActions.loadPublishedPosts, {
      run: (
        action: ReturnType<typeof AdminActions.loadPublishedPosts>,
        state: AdminState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        this.service
          .getPublishedPosts()
          .subscribe((publishedPosts: BlogPostSimple[]) => {
            return this.store.dispatch(
              AdminActions.loadPublishedPostsSuccess({ publishedPosts })
            );
          });
      },

      onError: (
        action: ReturnType<typeof AdminActions.loadPublishedPosts>,
        error
      ) => {
        console.error('Error', error);
        return this.store.dispatch(AdminActions.apiFailure({ error }));
      },
    })
  );

  // API call for creating a new post
  createPost$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AdminActions.createPost),
        tap((action) => {
          const newPost: BlogPost = JSON.parse(JSON.stringify(action.post));
          newPost.slug = `${new Date()
            .getTime()
            .toString()}-${newPost.title?.toLowerCase().split(' ').join('-')}`;
          newPost.summary =
            newPost.summary || newPost.content.substring(0, 200);

          this.service.savePost(newPost).subscribe(() => {
            return this.router.navigate(['/admin']);
          });
        })
      );
    },
    { dispatch: false }
  );

  // API call for updating a post
  updatePost$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AdminActions.updatePost),
        tap((action) => {
          const updatedPost: BlogPost = JSON.parse(JSON.stringify(action.post));
          updatedPost.summary =
            updatedPost.summary || updatedPost.content.substring(0, 150);

          this.service.updatePost(updatedPost).subscribe(() => {
            return this.router.navigate(['/admin']);
          });
        })
      );
    },
    { dispatch: false }
  );

  // API call for deleting a post
  deletePost$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AdminActions.deletePost),
        tap((action) => {
          this.service.deletePost(action.slug).subscribe(() => {
            return this.router.navigate(['/admin']);
          });
        })
      );
    },
    { dispatch: false }
  );
}
