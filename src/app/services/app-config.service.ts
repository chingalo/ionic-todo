import { Injectable } from '@angular/core';
import { createConnection } from 'typeorm';
import { Platforms } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  appConfig;
  constructor(platform: Platforms) {
    this.appConfig = platform;
  }

  async setConnection() {
    const platform = this.appConfig;
    if (platform.is('cordova')) {
      // Running on device or emulator
      alert('here');
      await createConnection({
        type: 'cordova',
        database: 'test',
        location: 'default',
        logging: ['error', 'query', 'schema'],
        synchronize: true,
        entities: []
      });
    } else {
      // Running app in browser
      await createConnection({
        type: 'sqljs',
        autoSave: true,
        location: 'browser',
        logging: ['error', 'query', 'schema'],
        synchronize: true,
        entities: []
      });
    }
  }
}
