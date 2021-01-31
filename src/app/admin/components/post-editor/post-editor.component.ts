import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BlogPost, PostCategories } from 'src/app/shared/models/post';
import { AdminFacade } from '../../+state/admin.facade';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss'],
})
export class PostEditorComponent implements OnInit, OnDestroy {
  isUploadingFeaturedImage = false;
  postCreatedDate: Date = new Date();
  currentPost!: BlogPost;
  postCategoryOptions = [
    { label: 'Misc', value: PostCategories.misc },
    { label: 'Review', value: PostCategories.review },
    { label: 'Tech', value: PostCategories.tech },
    { label: 'Trivia', value: PostCategories.trivia },
    { label: 'Cricket', value: PostCategories.cricket },
  ];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private adminFacade: AdminFacade,
    private service: AdminService
  ) {}

  ngOnInit(): void {
    this.adminFacade.currentPost$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data) {
          this.currentPost = JSON.parse(JSON.stringify(data));
          if (this.currentPost.createdDate)
            this.postCreatedDate = new Date(this.currentPost.createdDate);
        }
      });
  }

  onImagePicked(event: any): void {
    this.isUploadingFeaturedImage = true;
    const file = event.target.files[0];

    this.service
      .uploadArticleCoverImage(file)
      .snapshotChanges()
      .pipe(takeUntil(this.destroy$))
      .subscribe((uploadSnapshot: any) => {
        if (uploadSnapshot?.state === 'success') {
          uploadSnapshot?.ref?.getDownloadURL()?.then((url: string) => {
            this.currentPost.imageURL = url;
            this.isUploadingFeaturedImage = false;
          });
        }
      });
  }

  save(): void {
    this.currentPost.createdDate = this.postCreatedDate.getTime();
    this.adminFacade.setCurrentPost(this.currentPost);
    if (this.currentPost.slug) {
      this.adminFacade.updatePost(this.currentPost);
    } else {
      this.adminFacade.createPost(this.currentPost);
    }
  }

  createDraft(): void {
    this.currentPost.published = false;
    this.save();
  }

  publishPost(): void {
    this.currentPost.published = true;
    this.save();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
