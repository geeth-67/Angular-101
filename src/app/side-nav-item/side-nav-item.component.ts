import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss']
})
export class SideNavItemComponent {

  @Input()
  public name: string = 'Home';
  public icon: string = 'home';

  @Output()
  public onNavClick: EventEmitter<any> = new EventEmitter();
  constructor() {}
  onClick() {
    console.log('parent click' + this.name);
  }
}
