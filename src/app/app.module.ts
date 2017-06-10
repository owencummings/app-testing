import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GroupVotePage } from '../pages/group-vote/group-vote';
import { GroupVote2Page } from '../pages/group-vote2/group-vote2';
import { GroupVoteActivityPage } from '../pages/group-vote-activity/group-vote-activity';
import { GroupVoteTimePage } from '../pages/group-vote-time/group-vote-time';
import { GroupEventPage } from '../pages/group-event/group-event';
import { GroupCreatePage } from '../pages/group-create/group-create';
import { GroupCreate2Page } from '../pages/group-create2/group-create2';
import { GroupCreate3Page } from '../pages/group-create3/group-create3';
import { GroupCreate4Page } from '../pages/group-create4/group-create4';
import { GroupCreate5Page } from '../pages/group-create5/group-create5';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { DataProvider } from '../providers/data/data';
import { GroupChatPage } from '../pages/group-chat/group-chat';
import { NewEventProvider } from '../providers/new-event/new-event';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GroupVotePage,
    GroupVote2Page,
    GroupVoteActivityPage,
    GroupVoteTimePage,
    GroupEventPage,
    GroupCreatePage,
    GroupCreate2Page,
    GroupCreate3Page,
    GroupCreate4Page,
    GroupCreate5Page,
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
    GroupVote2Page,
    GroupVoteActivityPage,
    GroupVoteTimePage,
    GroupEventPage,
    GroupCreatePage,
    GroupCreate2Page,
    GroupCreate3Page,
    GroupCreate4Page,
    GroupCreate5Page,
    UserProfilePage,
    GroupChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    NewEventProvider
  ]
})
export class AppModule {}
