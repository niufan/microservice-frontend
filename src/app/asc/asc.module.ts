import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';

import { MicroserviceCommonModule } from '../common/microservice-common.module';

import { Oauth2Service } from './oauth2.service';

import { AscRoutingModule } from './asc-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,

    MicroserviceCommonModule,
    AscRoutingModule
  ],
  declarations: [
    AuthenticationComponent
  ],
  exports: [
    AuthenticationComponent
  ],
  providers: [
    Oauth2Service
  ]
})
export class AscModule {}
