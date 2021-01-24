import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ScrollTopModule } from 'primeng/scrolltop';

import { ClientHeaderComponent } from './components/client-header/client-header.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { ClientPostViewComponent } from './components/client-post-view/client-post-view.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ClientStateModule } from './+state/client-state.module';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
  declarations: [
    ClientHeaderComponent,
    ClientDashboardComponent,
    ClientPostViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule,

    ButtonModule,
    CardModule,
    RippleModule,
    MenubarModule,
    InputTextModule,
    DataViewModule,
    TagModule,
    ScrollTopModule,
    TooltipModule,

    SharedModule,
    ClientStateModule,
  ]
})
export class ClientModule {}
