import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BlogPostSimple, PostCategories } from 'src/app/shared/models/post';
import { ClientFacade } from '../../+state/client.facade';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss'],
})
export class ClientDashboardComponent implements OnInit, OnDestroy {
  menuItems: MenuItem[] = [
    {
      label: 'HOME',
      routerLink: `/`,
    },
    {
      label: PostCategories.misc,
      routerLink: `/categories/${PostCategories.misc.toLowerCase()}`,
    },
    {
      label: PostCategories.review,
      routerLink: `/categories/${PostCategories.review.toLowerCase()}`,
    },
    {
      label: PostCategories.tech,
      routerLink: `/categories/${PostCategories.tech.toLowerCase()}`,
    },
    {
      label: PostCategories.trivia,
      routerLink: `/categories/${PostCategories.trivia.toLowerCase()}`,
    },
    {
      label: PostCategories.cricket,
      routerLink: `/categories/${PostCategories.cricket.toLowerCase()}`,
    },
  ];
  posts: BlogPostSimple[] = [];
  postCategory: string = '';
  searchString: string = '';

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private facade: ClientFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route?.params?.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (params?.category) {
        this.facade.loadCategoryPosts(
          this.route.snapshot.params.category.toUpperCase());
        this.postCategory = params.category;
      } else {
        (this.postCategory = ''), this.facade.loadAllPosts();
      }
    });

    this.facade.allPosts$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data) {
        this.posts = JSON.parse(JSON.stringify(data));
      }
    });
  }

  searchPosts() {
    this.facade.searchPosts(this.searchString, this.postCategory);
  }

  pageEventHandler(scrollTarget: any, event: any) {
    scrollTarget.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
