import { Injectable } from '@angular/core';
import { createConnection } from 'typeorm';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  constructor(private platform: Platform) {}

  async setConnection() {
    if (this.platform.is('cordova')) {
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
      console.log('inside browser');
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
