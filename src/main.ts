import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import * as firebase from 'firebase';
import {DEFAULT_FIREBASE_APP} from 'fb3-ng2';


import { AppComponent } from './app/app.component';



const ENV_PROVIDERS = [];
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
} else {
  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

bootstrap(AppComponent, [
    // These are dependencies of our App
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    ...ENV_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // use #/ routes, remove this for HTML5 mode

    {
        provide: DEFAULT_FIREBASE_APP, useFactory: () => {
            let app: firebase.app.App;
            try {
                //this will work if the app is loaded...
                app = firebase.app();
            } catch (e) {
                app = firebase.initializeApp({
                    apiKey: 'AIzaSyAj-sVghybTl3Gg0fJb1IctNSaeHSoxjKY',
                    authDomain: 'blistering-inferno-4109.firebaseapp.com',
                    databaseURL: 'https://blistering-inferno-4109.firebaseio.com',
                    storageBucket: 'blistering-inferno-4109.appspot.com'
                });
            }
            return app;
        }
    }
  ])
  .catch(err => console.error(err));
