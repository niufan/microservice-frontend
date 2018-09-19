import { Injectable } from '@angular/core';

export enum CacheMode {
  LOCAL_STORAGE
}

@Injectable()
export class CacheService {

  constructor(private mode: CacheMode = CacheMode.LOCAL_STORAGE) {
    const myMenus = [];
    myMenus.push(
      {
        'code': 'resource',
        'name': '资源',
        'link': 'resource'
      },
      {
        'code': 'asc',
        'name': '认证服务中心',
        'link': 'asc'
      }
    );
    this.set('MY_MENUS', myMenus);
    console.log(`constructor cache service`);
  }

  set<T>(key, value: T) {
    switch (this.mode) {
      case CacheMode.LOCAL_STORAGE: {
        localStorage.setItem(key, JSON.stringify({'key': key, 'value': value}));
        break;
      }
    }
  }

  get<T>(key): T | null {
    let result;
    let data = null;
    switch (this.mode) {
      case CacheMode.LOCAL_STORAGE: {
        data = localStorage.getItem(key);
        break;
      }
    }
    if (data != null) {
      result = JSON.parse(data).value;
    } else {
      result = null;
    }
    return result;
  }

}
