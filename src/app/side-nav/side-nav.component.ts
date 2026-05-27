import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  public navItems = [
    {
      name: 'Home',
      icon: 'home',
    },
    {
      name: 'About',
      icon: 'info',
    },
    {
      name: 'Contact',
      icon: 'phone',
    },
    {
      name: 'Age',
      icon: 'age',
    }
  ]
}
