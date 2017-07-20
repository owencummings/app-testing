import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  firebase  from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireModule } from 'angularfire2';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public facebook: Facebook) {
  }

  login(){

    this.facebook.login(['email']).then((loginResponse) => {
      let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
      firebase.auth().signInWithCredential(credential).then((info) => {
        console.log(JSON.stringify(info))
      });
    }); //change 'email' based on permissions needed
  }

  login2(){
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(() => {
      firebase.auth().getRedirectResult().then((result) => {
        //console.log(JSON.stringify(result))
        //this.navCtrl.push(this.homePage)
      })
    }).catch(function(error){
      //console.log(JSON.stringify(error));
    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
