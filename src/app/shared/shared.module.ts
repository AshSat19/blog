import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { SharedService } from './services/shared.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [FooterComponent, LoaderComponent],
  imports: [CommonModule, CardModule, ProgressBarModule],
  exports: [FooterComponent, LoaderComponent],
  providers: [SharedService],
})
export class SharedModule {}
