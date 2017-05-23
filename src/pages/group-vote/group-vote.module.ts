import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupVotePage } from './group-vote';

@NgModule({
  declarations: [
    GroupVotePage,
  ],
  imports: [
    IonicPageModule.forChild(GroupVotePage),
  ],
  exports: [
    GroupVotePage
  ]
})
export class GroupVotePageModule {}
