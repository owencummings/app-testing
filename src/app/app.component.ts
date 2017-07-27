import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DataProvider } from '../providers/data/data';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;  //= HomePage
  homePage = HomePage;
  dataProvider = DataProvider;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, loadingCtrl: LoadingController) {
    /*
    let loader = this.loadingCtrl.create();
    loader.present();
    this.listenToUserStatusUpdate(loader);
    */
    const firebaseConfig = {
      apiKey: "AIzaSyCwC6BF9ejLBZyJ4VwF6a0KiCXjXopVJuo",
      authDomain: "linkvote.firebaseapp.com",
      databaseURL: "https://linkvote.firebaseio.com",
      projectId: "linkvote",
      storageBucket: "linkvote.appspot.com",
      messagingSenderId: "780905015151"
    };
    firebase.initializeApp(firebaseConfig);

    /*
    firebase.auth().getRedirectResult().then(function(result) {
      if (result != null) {
        console.log(result);
        this.navCtrl.setRoot(HomePage);
        this.rootPage = HomePage;

        //vv dont need this vv
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token, user);
        //^^ ^^ ^^    ^^ ^^ ^^
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
    */


    /*
    let fireBaseUser = firebase.auth().currentUser;
    console.log(fireBaseUser);
    this.rootPage = fireBaseUser ? HomePage : LoginPage;
    */

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      //statusBar.styleDefault();
      //The BG and false thing MAY work during the actual ios build, just not in ionicview
      //statusBar.overlaysWebView(false);
      //statusBar.backgroundColorByHexString('#EC407A');
      //statusBar.styleLightContent();
      //statusBar.overlaysWebView(true);
      //splashScreen.hide();

    });



  }
}
