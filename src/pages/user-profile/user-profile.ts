import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { LoginPage } from '../login/login';
import firebase from 'firebase';
 /**
 * Generated class for the UserProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  loginPage = LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  }

  logout(){
    firebase.auth().signOut();
    this.dataProvider.data2.existence = [false];
    this.dataProvider.data2.displayName = '';
    this.dataProvider.data2.uid = '';
    this.dataProvider.data2.photoURL = '';
    this.navCtrl.setRoot(this.loginPage)
  }

}
