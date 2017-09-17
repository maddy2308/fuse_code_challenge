import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../menu_item.model';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {

  @Input() menu: MenuItem;

  constructor() {}

  ngOnInit() {}

  removeSpaceFromMenuName(name: string) {
    name = name.replace(/\s/g, '');
    return name;
  }
}
