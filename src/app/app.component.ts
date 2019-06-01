import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCS77TuCe2jrXqmSDh9Ivs7gWedPM7PJ3E",
  authDomain: "ionic3-gastos-45fd4.firebaseapp.com",
  databaseURL: "https://ionic3-gastos-45fd4.firebaseio.com",
  projectId: "ionic3-gastos-45fd4",
  storageBucket: "ionic3-gastos-45fd4.appspot.com",
  messagingSenderId: "404912444334"
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
