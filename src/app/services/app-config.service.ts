import { Injectable } from '@angular/core';
import { createConnection } from 'typeorm';
import { Platform } from '@ionic/angular';
import { Todo } from 'src/models/todo';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  constructor(private platform: Platform) {}

  async setConnection(dataBaseName: string) {
    if (this.platform.is('cordova')) {
      await createConnection({
        type: 'cordova',
        database: `${dataBaseName}`,
        location: 'default',
        logging: ['error', 'query', 'schema'],
        synchronize: true,
        entities: [Todo]
      });
    }
  }
}
