import { Component } from '@angular/core';
import { slider } from './animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:
  [
    slider
  ]
})



export class AppComponent {
  title = 'My-Recipe-Book';

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}

