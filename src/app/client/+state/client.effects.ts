import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { ClientState } from './client.model';
import * as ClientActions from './client.actions';
import { ClientService } from '../services/client.service';
import { tap } from 'rxjs/operators';
import { BlogPost, BlogPostSimple } from 'src/app/shared/models/post';
import { DataPersistence } from '@nrwl/angular';

@Injectable()
export class ClientEffects {
  constructor(
    private actions$: Actions,
    private store: Store<ClientState>,
    private dataPersistence: DataPersistence<ClientState>,
    private service: ClientService
  ) {}

  // API call to load drafted posts
  loadAllPosts$ = createEffect(() =>
    this.dataPersistence.fetch(ClientActions.loadAllPosts, {
      run: (
        action: ReturnType<typeof ClientActions.loadAllPosts>,
        state: ClientState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        this.service
          .getPublishedPosts()
          .subscribe((allPosts: BlogPostSimple[]) => {
            return this.store.dispatch(
              ClientActions.loadAllPostsSuccess({ allPosts })
            );
          });
      },

      onError: (
        action: ReturnType<typeof ClientActions.loadAllPosts>,
        error
      ) => {
        console.error('Error', error);
        return this.store.dispatch(ClientActions.apiFailure({ error }));
      },
    })
  );

  // API call for uploading featured image
  loadCategoryPosts$ = createEffect(() =>
    this.dataPersistence.fetch(ClientActions.loadCategoryPosts, {
      run: (
        action: ReturnType<typeof ClientActions.loadCategoryPosts>,
        state: ClientState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        this.service
          .getPublishedPosts()
          .subscribe((allPosts: BlogPostSimple[]) => {
            return this.store.dispatch(
              ClientActions.loadCategoryPostsSuccess({ allPosts })
            );
          });
      },

      onError: (
        action: ReturnType<typeof ClientActions.loadCategoryPosts>,
        error
      ) => {
        console.error('Error', error);
        return this.store.dispatch(ClientActions.apiFailure({ error }));
      },
    })
  );

  // API call for fetching a post
  loadPost$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ClientActions.loadPost),
        tap((action) => {
          this.service
            .getPost(action.slug)
            .subscribe((currentPost: BlogPost) => {
              return this.store.dispatch(
                ClientActions.loadPostSuccess({ currentPost })
              );
            });
        })
      );
    },
    { dispatch: false }
  );
}
