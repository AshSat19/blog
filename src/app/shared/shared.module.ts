import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { SharedService } from './services/shared.service';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, LoaderComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule, ButtonModule, CardModule, ProgressBarModule],
  exports: [FooterComponent, LoaderComponent, NotFoundComponent],
  providers: [SharedService],
})
export class SharedModule {}
