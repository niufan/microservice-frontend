import {NgModule} from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { IntegrationComponent } from './integration.component';

const routes: Routes = [
  {
    path: '',
    component: IntegrationComponent,
    children: [
      {
        path: 'resource',
        loadChildren: '../resource/resource.module#ResourceModule'
      },
      {
        path: 'asc',
        loadChildren: '../asc/asc.module#AscModule'
      },
      {
        path: '',
        outlet: '<div>Welcome</div>'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class IntegrationRoutingModule {}
