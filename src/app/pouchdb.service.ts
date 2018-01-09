import { Injectable, EventEmitter } from '@angular/core';
import PouchDB from 'pouchdb'; // seems to be the right way to import

// new PouchDB('test');
let db = new PouchDB('todos');
let remoteCouch = false;

@Injectable()
export class PouchDBService {

  private isInstantiated: boolean;
  private database: any;
  private listener: EventEmitter<any> = new EventEmitter();

  public constructor() {
    if (!this.isInstantiated) {
      this.database = new PouchDB('test');
      this.isInstantiated = true;
    }
  }

  public fetch() {
    return this.database.allDocs({include_docs: true});
  }

  public get(id: string) {
    return this.database.get(id);
  }

  public put(id: string, document: any) {
    document._id = id;
    return this.get(id).then(result => {
      document._rev = result._rev;
      return this.database.put(document);
    }, error => {
      if (error.status === '404') {
        return this.database.put(document);
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    });
  }

  public sync(remote: string) {
    const remoteDatabase = new PouchDB(remote);
    this.database.sync(remoteDatabase, {
      live: true
    }).on('change', change => {
      this.listener.emit(change);
    }).on('error', error => {
      console.error(JSON.stringify(error)); // problem here
    });
  }

  public getChangeListener() {
    return this.listener;
  }

}
