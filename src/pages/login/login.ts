import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  firebase  from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { DataProvider } from '../../providers/data/data';
//import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './../../providers/firebase-service';
//^^ currently not being used but maybe could be considered as an alternatively storage to dataProvider??
import { HomePage } from '../home/home';
import { FacebookService, LoginResponse } from 'ngx-facebook';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  homePage = HomePage;


  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseService,
    public dataProvider: DataProvider, public facebook: Facebook, public fb: FacebookService) {


    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        console.log(user);
        //console.log(user.credential);
        this.firebaseService.id = user.uid; //note, doubling up on data here for no real reason (beyond avoinding conflict)
        //this.firebaseService.accessToken = user.credential.accessToken; // probably want to have it all be in fbs in future
        this.dataProvider.data2.existence = [true];
        this.dataProvider.data2.name = user.displayName;
        this.dataProvider.data2.id = user.uid;
        this.dataProvider.data2.profilePicture= user.photoURL;
        var refLoc = firebase.database().ref('userDb/');
        console.log('The Reference Location is:')
        console.log(refLoc);
        refLoc.child(user.uid).once('value', function(snapshot){

          var exists = (snapshot.val() != null);
          console.log(snapshot.val())
          console.log('Existence check:') // this check should be returning false if user is new
          console.log(exists)
          if (!exists){
            console.log('Good')
            firebase.database().ref('userDb/' + user.uid).set({
              name: user.displayName,
              id: user.uid,
              profilePicture: user.photoURL,
              eventList: []
            })
          }
        })
        //this.navCtrl.setRoot(this.homePage);
      } else {
        console.log("There's no user here");
      }
    });

  }

  login(){ //really have stopped trying with this but I imagine it would work when the non-cordova attempt works
    this.facebook.login(['email']).then((loginResponse) => {
      let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
      firebase.auth().signInWithCredential(credential).then((info) => {
        console.log(JSON.stringify(info))
      });
    }); //change 'email' based on permissions needed
  }

  login2(){
    const provider = new firebase.auth.FacebookAuthProvider();
    console.log(provider)
    provider.addScope('user_friends');
    firebase.auth().signInWithRedirect(provider).then(() => {
      firebase.auth().getRedirectResult().then( (result) => {
          console.log("Success");
          console.log(result)
          this.dataProvider.data2.existence = [true];
          this.dataProvider.data2.name = result.user.displayName;
          this.dataProvider.data2.id = result.user.uid;
          this.dataProvider.data2.profilePicture= result.user.photoURL;
          var refLoc = firebase.database().ref('userDb/');
          refLoc.child(result.uid).once('value', function(snapshot){
            var exists = (snapshot.val() != null);
            if (!exists){
              firebase.database().ref('userDb/' + result.uid).set({
                name: result.user.displayName,
                id: result.user.uid,
                profilePicture: result.user.photoURL,
                eventList: []
              })
            }
          })
          //this.userProfile = result;
          //this.navCtrl.setRoot(this.homePage);
        })
    }).catch((error) => {
      alert(error.message);
    })
  }

  login3(){ //this one is non-native fb-central login, I believe.
    // i think i will need to add another redirect URI when running from non-local
    this.fb.login().then((response: LoginResponse) => {
      console.log(response);
      this.fb.api('/me/friends').then((res: any ) =>{ //WE DID ITTTT!!!
        console.log(res);
        /*set the friendsList*/
        //firebase.database().ref().
      });
      var param = {
        type: 'square',
        width: 720,
        height: 720
      }
      this.fb.api('/me/picture', 'get', param).then((res: any ) =>{
        console.log(res);
        /*set the picture
        firebase.database().ref().
        firebase.database().ref().*/
      });
      let credential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
      firebase.auth().signInWithCredential(credential).then((info) => {
        //console.log(JSON.stringify(info))
      });
      /*
      this.fb.api()

      */
    })
  }

  logout(){
    firebase.auth().signOut();
    //this.fb.logout(); //could potential cause error if not logged in via this path
    this.dataProvider.data2.existence = [false];
    this.dataProvider.data2.name = '';
    this.dataProvider.data2.id = '';
    this.dataProvider.data2.profilePicture = '';
  }

  toHome(){
    this.navCtrl.setRoot(this.homePage);
  }

  ionViewDidLoad() {
    /*
    console.log('ionViewDidLoad LoginPage');
    console.log(this.dataProvider.data2);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result != null) {
        console.log("Success");
        console.log(result)
        this.dataProvider.data2.existence = true;
        this.dataProvider.data2.displayName = result.user.displayName;
        this.dataProvider.data2.uid = result.user.uid;
        this.dataProvider.data2.photoURL = result.user.photoURL;
      }
    }).catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
      console.log(errorMessage);
    });
    console.log('Second read');
    console.log(this.dataProvider.data2);
    */
  }

}
