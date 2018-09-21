import { NgModule } from '@angular/core';

import { CacheService } from './cache.service';

@NgModule({
  imports: [],
  exports: [],
  providers: [
    { provide: CacheService, useFactory: function() { return new CacheService(); } }
    ]
})
export class MicroserviceCommonModule {}
