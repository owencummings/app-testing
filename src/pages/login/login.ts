import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  firebase  from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { DataProvider } from '../../providers/data/data';
//import { AngularFireModule } from 'angularfire2';
import { HomePage } from '../home/home';
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


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataProvider: DataProvider, public facebook: Facebook) {


    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        console.log(user);
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

  logout(){
    firebase.auth().signOut();
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
