import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromClient from './client.reducer';
import { ClientEffects } from './client.effects';
import { ClientFacade } from './client.facade';
import { ClientService } from '../services/client.service';

@NgModule({
  imports: [
    StoreModule.forFeature(fromClient.CLIENT_FEATURE_KEY, fromClient.reducer),
    EffectsModule.forFeature([ClientEffects]),
  ],
  providers: [ClientFacade, ClientService],
})
export class ClientStateModule {}
