import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourceComponent } from './resource.component';
import { ResourcePageComponent } from './page/resource-page.component';

const routes: Routes = [
  {
    path: '',
    component: ResourceComponent,
    children: [
      {
        path: 'page',
        component: ResourcePageComponent
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
export class ResourceRoutingModule {
}
