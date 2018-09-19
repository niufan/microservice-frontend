import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';

import { IntegrationRoutingModule } from './integration-routing.module';

import { IntegrationComponent } from './integration.component';
import {ResourceModule} from '../resource/resource.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,

    ResourceModule,
    IntegrationRoutingModule
  ],
  declarations: [
    IntegrationComponent
  ],
  exports: [
    IntegrationComponent
  ]
})
export class IntegrationModule {}
