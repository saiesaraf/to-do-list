import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name :string= 'Brad';
  constructor()
  {
    this.changeName('jon');
  }
  changeName(name:string):void
  {
    this.name=name;
  }
}
