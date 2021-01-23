import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminFacade } from 'src/app/admin/+state/admin.facade';
import { BlogPostSimple } from 'src/app/shared/models/post';

@Component({
  selector: 'app-published-posts',
  templateUrl: './published-posts.component.html',
  styleUrls: ['./published-posts.component.scss'],
})
export class PublishedPostsComponent implements OnInit, OnDestroy {
  publishedPosts: BlogPostSimple[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private adminFacade: AdminFacade) {}

  ngOnInit(): void {
    this.adminFacade.loadPublishedPosts();
    this.adminFacade.publishedPosts$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data) {
          this.publishedPosts = JSON.parse(JSON.stringify(data));
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
