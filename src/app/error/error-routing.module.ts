import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

const routes: Routes = [
  {
    path: 'page/:status',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'page/404'
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
export class ErrorRoutingModule {}
