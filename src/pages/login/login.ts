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
        this.dataProvider.data2.existence = true;
        this.dataProvider.data2.displayName = user.displayName;
        this.dataProvider.data2.uid = user.uid;
        this.dataProvider.data2.photoURL = user.photoURL;
        this.navCtrl.push(this.homePage);
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

  login2():void{
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(() => {
      firebase.auth().getRedirectResult().then( (result) => {
          console.log("Success");
          console.log(result)
          this.dataProvider.data2.existence = true;
          this.dataProvider.data2.displayName = result.user.displayName;
          this.dataProvider.data2.uid = result.user.uid;
          this.dataProvider.data2.photoURL = result.user.photoURL;
          //this.userProfile = result;
          //this.navCtrl.setRoot(this.homePage);
        })
    }).catch((error) => {
      alert(error.message);
    })
  }

  logout():void{
    firebase.auth().signOut();
    this.dataProvider.data2.existence = false;
    this.dataProvider.data2.displayName = '';
    this.dataProvider.data2.uid = '';
    this.dataProvider.data2.photoURL = '';
  }

  toHome():void{
    this.navCtrl.push(this.homePage);
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
