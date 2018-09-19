import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { CacheService } from '../common/cache.service';

export class Menu {
  code: string;
  name: string;
  link: string;
}

@Injectable()
export class MenuService {
  static readonly MY_MENUS_CACHE_KEY = 'MY_MENUS';

  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService
  ) {

  }

  getMyMenus(): Observable<Menu[]> {
    console.log(`getMyMenus--------------------------------------------------`);
    let myMenus$;
    const myMenusCache = this.cacheService.get<Menu[]>(MenuService.MY_MENUS_CACHE_KEY);
    if (myMenusCache == null) {
      myMenus$ = this.httpClient.get<Menu[]>('');
    } else {
      myMenus$ = of<Menu[]>(myMenusCache);
    }
    return myMenus$;
  }
}
