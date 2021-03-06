import { Component, Inject } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import * as firebase from 'firebase';
import {
    DEFAULT_FIREBASE_APP
} from 'fb3-ng2';


import { ApiService } from './shared';
import { HomeComponent } from './home';
import { AboutComponent } from './about';



import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home'},
  {path: '/About', component: AboutComponent, name: 'About'}
])
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService, @Inject(DEFAULT_FIREBASE_APP) private fbApp: Object) {
      console.log('in the app component', this.fbApp);
  }
}
