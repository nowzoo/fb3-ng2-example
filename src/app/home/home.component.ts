import { Component, OnInit, Inject } from '@angular/core';
import * as firebase from 'firebase';
import { DEFAULT_FIREBASE_APP, FirebaseObject, FirebaseArray } from 'fb3-ng2';

@Component({
  selector: 'my-home',
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')]
})
export class HomeComponent implements OnInit {

  public posts: FirebaseArray;
  public listOfScalars: FirebaseArray;
  public anObject: FirebaseObject;
  public doesntExist: FirebaseObject;
  public aScalar: FirebaseObject;
  public listAsQuery: FirebaseArray;
  //inject the app...
  constructor(@Inject(DEFAULT_FIREBASE_APP) private fbApp: any) {
      //console.log()
  }

  ngOnInit() {
    this.posts = new FirebaseArray(this.fbApp.database().ref('posts'));
    this.listOfScalars = new FirebaseArray(this.fbApp.database().ref('listOfScalars'));

    this.listAsQuery = new FirebaseArray(this.fbApp.database().ref('posts').orderByChild('title'));

    this.anObject = new FirebaseObject(this.fbApp.database().ref('anObject'));
    this.doesntExist = new FirebaseObject(this.fbApp.database().ref('doesntExist'));
    this.aScalar = new FirebaseObject(this.fbApp.database().ref('aScalar'));
  }

}
