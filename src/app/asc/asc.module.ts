import { NgModule } from '@angular/core';

import { AscRoutingModule } from './asc-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';


@NgModule({
  imports: [
    AscRoutingModule
  ],
  declarations: [
    AuthenticationComponent
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AscModule {}
