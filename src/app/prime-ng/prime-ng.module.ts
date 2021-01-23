import { NgModule } from '@angular/core';

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

@NgModule({
  imports: [
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
  ],
  exports: [
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
  ],
})
export class PrimeNgModule {}
