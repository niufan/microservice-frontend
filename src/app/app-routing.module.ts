import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'resource',
    loadChildren: './resource/resource.module#ResourceModule'
  },
  {
    path: '**',
    redirectTo: 'resource'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true // for debug
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

