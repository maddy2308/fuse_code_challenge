import { Component, OnInit } from '@angular/core';
import {MenuItem} from './menu_item.model';

const menu: MenuItem[] = [
  new MenuItem('Menu Item 1', [
    new MenuItem('SubMenu Item 1', [
      new MenuItem('SubSubMenu Item 1', []),
      new MenuItem('SubSubMenu Item 2', [])
    ]),
    new MenuItem('SubMenu Item 2', [])
  ]),
  new MenuItem('Menu Item 2', []),
  new MenuItem('Menu Item 3', [
    new MenuItem('SubMenuItem 3', [])
  ])
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  private menu: MenuItem[] = menu;


  constructor() { }

  ngOnInit() {
  }

}
