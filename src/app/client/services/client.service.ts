import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost, BlogPostSimple } from 'src/app/shared/models/post';
import { environment } from 'src/environments/environment';

const API_BASE_URL = `${environment.apiURL}posts/`;

@Injectable()
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  getCategoryPosts(category: string): Observable<BlogPostSimple[]> {
    return this.httpClient.get<BlogPostSimple[]>(`${API_BASE_URL}categories/${category}`);
  }

  getPublishedPosts(): Observable<BlogPostSimple[]> {
    return this.httpClient.get<BlogPostSimple[]>(`${API_BASE_URL}published`);
  }

  getPost(slug: string): Observable<BlogPost> {
    return this.httpClient.get<BlogPost>(`${API_BASE_URL}${slug}`);
  }
}
