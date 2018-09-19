import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'asc',
    loadChildren: './asc/asc.module#AscModule'
  },
  {
    path: 'login',
    redirectTo: 'asc/login'
  },
  {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  },
  {
    path: 'app',
    loadChildren: './integration/integration.module#IntegrationModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true // true for debug
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

