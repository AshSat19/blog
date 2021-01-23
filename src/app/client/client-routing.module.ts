import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { ClientPostViewComponent } from './components/client-post-view/client-post-view.component';

const routes: Routes = [
  { path: '', component: ClientDashboardComponent },
  { path: 'categories/:category', component: ClientDashboardComponent },
  {
    path: 'categories/:category/posts/:slug',
    component: ClientPostViewComponent,
  },
  {
    path: 'posts/:slug',
    component: ClientPostViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
