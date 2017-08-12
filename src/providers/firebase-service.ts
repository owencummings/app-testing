import {Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {

    id: any = '0'; //this should resolve to a uid when logged in

    constructor(public afd: AngularFireDatabase){ //public afd: AngularFireDatabase
          console.log('Firebase Service Provider')
      }

    public getEvents():any[]{
      console.log("Getting Events")
      var eventArr = [];
      var eventIndices: any =  {};
      firebase.database().ref('/userDb' + '/' + this.id + '/invitedEvents').once('value', function(snapshot){
        eventIndices = snapshot.val();
      }).then( result => {
        console.log(eventIndices);
        Object.keys(eventIndices).forEach(key => {
          var event1;
          firebase.database().ref('/eventDb' + '/' + key).once('value').then((value) => {
            event1 = value.val();
            console.log(event1);
            eventArr.push(event1)
          });
        })
      return eventArr;
      }).catch((error) => {
        console.log('Error!')
        return eventArr;
      });
      return eventArr;
      //return this.afd.list('/eventDb');
    }

    public createEvent(thing){
        console.log(thing);
        var refLoc = firebase.database().ref('/eventDb').push(thing)
        //firebase.database().ref('/userDb' + '/' + this.id + '/invitedEvents').push(refLoc.key)

        //firebase.database().ref('/userDb' + '/' + this.id + '/invitedEvents' + '/' + refLoc.key).set(refLoc.key)
        thing.invitedUsers.forEach( uid =>{
          firebase.database().ref('/userDb' + '/' + uid + '/invitedEvents' + '/' + refLoc.key).set(refLoc.key)
        });
    }

    public searchFriends(searchTerm){
      //array is returning before the friendsList reads are done
      var arr: any = [];
      firebase.database().ref('/userDb').once('value').then((snapshot) => {
        console.log(snapshot.val())
        console.log(Object.keys(snapshot.val()))

        Object.keys(snapshot.val()).filter(function(user){
          firebase.database().ref('/userDb/' + user + '/displayName').once('value').then((snapshot2) => {
            console.log(snapshot2.val())
            console.log(snapshot2.val().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
            if (snapshot2.val().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
              arr.push(snapshot2.val())
              console.log(arr)
            }
          })
        })
      }).catch((error) =>{
        console.log('Ahh, an error!:')
        console.log(error.message);
      });
      console.log(arr)
      return arr



    }

    public getProfilePicture(uid){
      var profile = firebase.database().ref('/userDb' + '/' + uid ).once('value', function(snapshot){
        console.log(snapshot.val().profilePicture)
        return snapshot.val().profilePicture
      }).catch((error) => {
        console.log('Profile Picture fetch error.')
      })

    }

    public getDisplayName(uid){
      var profile = firebase.database().ref('/userDb' + '/' + uid ).once('value', function(snapshot){
        console.log(snapshot.val().profilePicture)
        return snapshot.val().displayName
      }).catch((error) => {
        console.log('Display name fetch error.')
      })
    }

    public getEventIcon(event){
      //console.log(this.afd.database.ref('/userDb/' + event.ownerId + '/profilePicture'))
      //return this.afd.database.ref('/userDb/' + event.ownerId + '/profilePicture');
    }

    public sendMessage(message, event){
      if(message && message != "") {
        var newMessage = {
          id: null,
          time: null,
          userId: this.id,
          text: message
        }
        firebase.database().ref('/eventDb' + '/' + event.key + '/chat').push(newMessage);
      }
    }

}
