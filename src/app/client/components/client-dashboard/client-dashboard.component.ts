import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BlogPostSimple } from 'src/app/shared/models/post';
import { ClientFacade } from '../../+state/client.facade';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss'],
})
export class ClientDashboardComponent implements OnInit, OnDestroy {
  posts: BlogPostSimple[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private facade: ClientFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.route?.snapshot?.params?.category) this.facade.loadCategoryPosts(this.route.snapshot.params.category)
    else this.facade.loadAllPosts()

    this.facade.allPosts$
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      if (data) {
        this.posts = JSON.parse(JSON.stringify(data));
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
