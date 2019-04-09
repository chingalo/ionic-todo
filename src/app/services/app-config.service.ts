import { Injectable } from '@angular/core';
import { createConnection, getConnection, getConnectionManager } from 'typeorm';
import { Platform } from '@ionic/angular';
import { Todo } from 'src/models/todo';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  connection: any;
  constructor(private platform: Platform) {}

  async setConnection(dataBaseName: string, oldDataBase?: string) {
    await this.platform.ready();
    console.log(JSON.stringify({ dataBaseName, oldDataBase }));
    if (this.platform.is('cordova')) {
      try {
        if (this.connection) {
          this.connection.close();
        }
      } catch (error) {
        console.log(JSON.stringify({ error }));
      } finally {
        setTimeout(async () => {
          const connection = await createConnection({
            type: 'cordova',
            database: `${dataBaseName}`,
            location: 'default',
            logging: ['error', 'query', 'schema'],
            synchronize: true,
            entities: [Todo]
          });
          this.connection = connection;
        }, 100);
      }
    }
  }
}
