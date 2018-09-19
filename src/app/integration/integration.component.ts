import { Component, OnInit, OnDestroy } from '@angular/core';

import { Menu, MenuService } from '../resource/menu.service';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: []
})
export class IntegrationComponent implements OnInit, OnDestroy {

  menus: Menu[];

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.getMyMenus().subscribe(
      menus => this.menus = menus,
      error => console.log(error)
    );
  }

  ngOnDestroy(): void {
  }

}
