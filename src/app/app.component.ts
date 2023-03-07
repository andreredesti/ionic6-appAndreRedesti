import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name = 'Testando o Ionic' + VERSION.major; //Modificado dia 06/03/23
  name = 'Ionic 6.2 Angular ' + VERSION.major;

  constructor() {}

  ionViewDidEnter() {}
}
