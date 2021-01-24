import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SharedService {
  private loaderSubject = new Subject<boolean>();

  constructor() {}

  getShowLoader(): Observable<boolean> {
    return this.loaderSubject.asObservable();
  }

  setShowLoaderState(state: boolean = false): void {
    this.loaderSubject.next(state);
  }
}
