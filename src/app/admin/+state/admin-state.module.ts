import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAdmin from './admin.reducer';
import { AdminEffects } from './admin.effects';
import { AdminFacade } from './admin.facade';
import { AdminService } from '../services/admin.service';

@NgModule({
  imports: [
    StoreModule.forFeature(fromAdmin.ADMIN_FEATURE_KEY, fromAdmin.reducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
  providers: [AdminFacade, AdminService],
})
export class AdminStateModule {}
