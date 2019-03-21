import { Component, OnInit } from '@angular/core';

import { items, links } from '../../contants/menus.contants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  items: string[] = items;
  links: string[] = links;

  constructor() { }

  ngOnInit() {
  }

}
