import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  showLoader = false;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.service
      .getShowLoader()
      // .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        // if (data) {
          this.showLoader = data;
        // }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
