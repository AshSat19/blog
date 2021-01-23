import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private facade: ClientFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    try {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    } catch (e) {
      window.scrollTo(0, 0);
    }

    this.facade.loadPost(this.route.snapshot.params.slug);

    this.facade.currentPost$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data) {
          this.currentPost = JSON.parse(JSON.stringify(data));
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
