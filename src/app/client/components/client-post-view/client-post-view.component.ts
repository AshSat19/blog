import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BlogPost } from 'src/app/shared/models/post';
import { ClientFacade } from '../../+state/client.facade';

@Component({
  selector: 'app-client-post-view',
  templateUrl: './client-post-view.component.html',
  styleUrls: ['./client-post-view.component.scss'],
})
export class ClientPostViewComponent implements OnInit, OnDestroy {
  currentPost: BlogPost = {
    slug: '',
    title: '',
    category: '',
    content: '',
    imageURL: '',
    createdDate: Date.now(),
    published: false,
  };

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private facade: ClientFacade,
    private route: ActivatedRoute,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.facade.loadPost(this.route.snapshot.params.slug);

    this.facade.currentPost$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data) {
          this.currentPost = JSON.parse(JSON.stringify(data));
          this.title.setTitle(
            `${this.currentPost?.title} | Ashwin Sathian's Blog`
          );
        }
      });
  }

  likePost() {
    this.facade.likePost(this.currentPost);
  }

  ngOnDestroy(): void {
    this.facade.clearCurrentPost();
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
