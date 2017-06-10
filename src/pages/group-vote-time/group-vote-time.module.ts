import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupVoteTimePage } from './group-vote-time';

@NgModule({
  declarations: [
    GroupVoteTimePage,
  ],
  imports: [
    IonicPageModule.forChild(GroupVoteTimePage),
  ],
  exports: [
    GroupVoteTimePage
  ]
})
export class GroupVoteTimePageModule {}
