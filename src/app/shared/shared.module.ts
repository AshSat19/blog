import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports:[FooterComponent]
})
export class SharedModule { }
