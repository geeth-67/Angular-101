import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  public title: string = 'project-01';
  public isLoggedIn: boolean = false;

  onButtonClick() {
    this.title = 'hello world 2';
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
