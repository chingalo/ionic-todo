import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { createConnection } from 'typeorm';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    platform: Platform,
    splashScreen: SplashScreen,
    statusBar: StatusBar
  ) {
    platform.ready().then(async () => {
      statusBar.styleBlackTranslucent();
      splashScreen.hide();
    });
  }
}
