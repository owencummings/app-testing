import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GroupVotePage } from '../pages/group-vote/group-vote';
import { GroupEventPage } from '../pages/group-event/group-event';
import { GroupCreatePage } from '../pages/group-create/group-create';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { DataProvider } from '../providers/data/data';
import { GroupChatPage } from '../pages/group-chat/group-chat';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GroupVotePage,
    GroupEventPage,
    GroupCreatePage,
    UserProfilePage,
    GroupChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GroupVotePage,
    GroupEventPage,
    GroupCreatePage,
    UserProfilePage,
    GroupChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}