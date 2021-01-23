import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabMenuModule } from 'primeng/tabmenu';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { AdminService } from './services/admin.service';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminPostViewComponent } from './components/admin-post-view/admin-post-view.component';
import { DraftPostsComponent } from './components/admin-dashboard/draft-posts/draft-posts.component';
import { PublishedPostsComponent } from './components/admin-dashboard/published-posts/published-posts.component';
import { AdminStateModule } from './+state/admin-state.module';

@NgModule({
  declarations: [
    PostEditorComponent,
    AdminDashboardComponent,
    AdminPostViewComponent,
    DraftPostsComponent,
    PublishedPostsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,

    ButtonModule,
    CardModule,
    RippleModule,
    MenubarModule,
    EditorModule,
    InputTextModule,
    InputTextareaModule,
    TooltipModule,
    ProgressSpinnerModule,
    TabMenuModule,
    DataViewModule,
    TagModule,
    CalendarModule,
    DropdownModule,

    SharedModule,
    AdminStateModule,
  ],
  providers: [AdminService],
})
export class AdminModule {}
