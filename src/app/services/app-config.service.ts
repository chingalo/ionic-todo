import { Injectable } from '@angular/core';
import { createConnection, getConnection, getConnectionManager } from 'typeorm';
import { Platform } from '@ionic/angular';
import { Todo } from 'src/models/todo';
import { Task } from 'src/models/task';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  connection: any;
  constructor(private platform: Platform) {}

  async setConnection(dataBaseName: string) {
    await this.platform.ready();
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
            entities: [Todo, Task]
          });
          this.connection = connection;
        }, 100);
      }
    }
  }
}
