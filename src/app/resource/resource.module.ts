import { NgModule, Optional, SkipSelf } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { CdkTableModule } from '@angular/cdk/table';

import {
  MatTableModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatCheckboxModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

import { CommonModule } from '../common/common.module';

import { ResourceRoutingModule } from './resource-routing.module';

import { ResourceComponent } from './resource.component';

import { ResourcePageComponent } from './page/resource-page.component';

import { MenuService } from './menu.service';

function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl: MatPaginatorIntl): MatPaginatorIntl {
  let intl: MatPaginatorIntl;
  if (parentIntl === undefined) {
    intl = new MatPaginatorIntl();
  } else {
    intl = parentIntl;
  }
  intl.itemsPerPageLabel = '每页条数：';
  intl.nextPageLabel = '下一页';
  intl.previousPageLabel = '上一页';
  intl.firstPageLabel = '首页';
  intl.lastPageLabel = '尾页';
  intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `没有数据`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize, endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `第 ${startIndex + 1} 至 ${endIndex} 条 共 ${length} 条`;
  };
  return intl;
}

@NgModule({
  declarations: [
    ResourceComponent,
    ResourcePageComponent
  ],
  imports: [
    HttpClientModule,

    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,

    CommonModule,
    ResourceRoutingModule
  ],
  exports: [
    ResourceComponent,
    ResourcePageComponent
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
      useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
    },
    MenuService
  ]
})
export class ResourceModule { }
