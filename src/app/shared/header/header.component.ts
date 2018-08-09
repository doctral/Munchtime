import { Component, OnInit, Directive, ElementRef, Input } from '@angular/core';
import { AuthenticateComponent } from '../../core/components/authenticate/authenticate.component';
import { BackgroundImage } from './background-image';
import { Item } from './model/item';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  item: Item;

  constructor() { }

  ngOnInit() {
  }

}
