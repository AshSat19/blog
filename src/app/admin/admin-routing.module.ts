import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DraftPostsComponent } from './components/admin-dashboard/draft-posts/draft-posts.component';
import { PublishedPostsComponent } from './components/admin-dashboard/published-posts/published-posts.component';
import { AdminPostViewComponent } from './components/admin-post-view/admin-post-view.component';
import { PostEditorComponent } from './components/post-editor/post-editor.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'draft' },
      { path: 'draft', component: DraftPostsComponent },
      { path: 'published', component: PublishedPostsComponent },
    ],
  },
  { path: 'create', component: PostEditorComponent },
  { path: 'edit/:slug', component: PostEditorComponent },
  { path: 'posts/:slug', component: AdminPostViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
