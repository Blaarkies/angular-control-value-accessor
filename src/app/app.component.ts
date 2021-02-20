import { Component } from '@angular/core';
import { UsableRoutes } from './usable-routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-control-value-accessor';
  routes = UsableRoutes;
}
