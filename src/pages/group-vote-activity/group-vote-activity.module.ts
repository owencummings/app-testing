import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupVoteActivityPage } from './group-vote-activity';

@NgModule({
  declarations: [
    GroupVoteActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupVoteActivityPage),
  ],
  exports: [
    GroupVoteActivityPage
  ]
})
export class GroupVoteActivityPageModule {}
