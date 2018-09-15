import { NgModule } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';

import { MatTableModule, MatPaginatorModule } from '@angular/material';

import { ResourceRoutingModule } from './resource-routing.module';

import { ResourceComponent } from './resource.component';

import { ResourcePageComponent } from './page/resource-page.component';



@NgModule({
  declarations: [
    ResourceComponent,
    ResourcePageComponent
  ],
  imports: [
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,

    ResourceRoutingModule
  ],
  exports: [
    ResourceComponent,
    ResourcePageComponent
  ]
})
export class ResourceModule { }
