import {Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {

    constructor(){ //public afd: AngularFireDatabase
          console.log('Firebase Service Provider')
      }

    public getEvents(){
      console.log("Getting Events")
      console.log(firebase.database());
      //return firebase.database().list('/eventDb/');
    }

    public getEventIcon(event){
      //console.log(this.afd.database.ref('/userDb/' + event.ownerId + '/profilePicture'))
      //return this.afd.database.ref('/userDb/' + event.ownerId + '/profilePicture');
    }

}
