import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { BlogPost, BlogPostSimple } from 'src/app/shared/models/post';
import { environment } from 'src/environments/environment';

const API_BASE_URL = `${environment.apiURL}posts/`;
@Injectable()
export class AdminService {
  constructor(
    private afStorage: AngularFireStorage,
    private httpClient: HttpClient
  ) {}

  private generateRandomString(): string {
    let result = '';
    const characterCorpus =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characterCorpus.length;
    for (let i = 0; i < 32; i++) {
      result += characterCorpus.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }

    return result;
  }

  uploadArticleCoverImage(image: File): AngularFireUploadTask {
    const randomId = this.generateRandomString();
    const filePath = '/featuredImages/' + randomId;
    const task = this.afStorage.upload(filePath, image);
    return task;
  }

  getDraftPosts(): Observable<BlogPostSimple[]> {
    return this.httpClient.get<BlogPostSimple[]>(`${API_BASE_URL}draft`);
  }

  getPublishedPosts(): Observable<BlogPostSimple[]> {
    return this.httpClient.get<BlogPostSimple[]>(`${API_BASE_URL}published`);
  }

  savePost(postBody: BlogPost): Observable<BlogPost> {
    return this.httpClient.post<BlogPost>(`${API_BASE_URL}`, postBody);
  }

  updatePost(postBody: BlogPost): Observable<BlogPost> {
    return this.httpClient.put<BlogPost>(
      `${API_BASE_URL}${postBody.slug}`,
      postBody
    );
  }

  deletePost(postSlug: string): Observable<any> {
    return this.httpClient.delete<any>(`${API_BASE_URL}${postSlug}`);
  }
}
