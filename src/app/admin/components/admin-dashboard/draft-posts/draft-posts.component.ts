import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminFacade } from 'src/app/admin/+state/admin.facade';
import { BlogPostSimple } from 'src/app/shared/models/post';

@Component({
  selector: 'app-draft-posts',
  templateUrl: './draft-posts.component.html',
  styleUrls: ['./draft-posts.component.scss'],
})
export class DraftPostsComponent implements OnInit, OnDestroy {
  draftPosts: BlogPostSimple[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private adminFacade: AdminFacade) {}

  ngOnInit(): void {
    this.adminFacade.loadDraftPosts();
    this.adminFacade.draftPosts$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data) {
          this.draftPosts = JSON.parse(JSON.stringify(data));
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
