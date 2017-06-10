import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class DataProvider {

  //data: any = [];

  data = {

    id: 0,
    invitedEvents: [0,1,2,3],
    topFriends: [1, 2, 3],
    eventDb: [
      {
        id: 0,
        notification: true,
        ownerId: 1,
        name: 'Dinner on 5/21',
        status: 'Voting ends in 4 hours',
        message: 'I\'m telling you, mild sauce is the way to go!',
        eventStage: 0,
        voteTime: null,
        voteTimeSetting: 'Evening',
        voteTimeOptions: ['6PM'],
        voteDayOptions: ['May 21st'],
        voteLocationActivityOptions: ['Harry\'s Bar and Grill', 'Cafe Olay', 'Earthen Eats', 'Swiss Charred'],
        eventTime: null,
        eventDate: null,
        eventActivity: null,
        invitedUsers: [0, 1, 2],
        chat: [
          {
            id: 0,
            time: null,
            userId: 1,
            text:  'I mean... I\'ve been to Swiss Charred before, and the chicken has nothing on Harry\'s.'
          },
          {
            id: 1,
            time: null,
            userId: 0,
            text:  'Well that\'s because you chose the wrong order.'
          },
          {
            id: 2,
            time: null,
            userId: 0,
            text:  'I\'m telling you, mild sauce is the way to go!'
          }

        ],
        votes: [],
      },
      {
        id: 1,
        notification: false,
        ownerId: 2,
        name: 'The Banana Gang',
        status: 'Club Psi | Today, 9PM',
         message: 'Let\'s get wrecked, son!',
         eventStage: 1,
         voteTime: null,
         voteTimeSetting: 'Evening',
         voteTimeOptions: ['9PM'],
         voteDayOptions: ['May 18th, May 19th'],
         voteLocationActivityOptions: ['Club Psi', 'Dive', 'Ernie\'s Taproom'],
         eventTime: '9PM',
         eventDate: 'May 19th',
         eventActivity: 'Club Psi',
         invitedUsers: [0, 2, 3],
         chat: [],
         votes: [
           {
             id: 0,
             time: '9PM',
             day: 'May 18th',
             locationActivity: 'Dive'
           }
         ],
       },
      {
        id: 2,
        notification: false,
        ownerId: 0,
        name: 'Lunch Date',
        status: 'Tortuga\'s | Tomorrow, 1PM',
        message: 'Love you too, honey.',
        eventStage: 1,
        voteTime: null,
        voteTimeSetting: 'Noontime',
        voteTimeOptions: ['12PM', '1PM'],
        voteDayOptions: ['May 20th'],
        voteLocationActivityOptions: ['Tortuga\'s', 'The Dancing Racoon', 'Small Talk Diner'],
        eventTime: '1PM',
        eventDate: 'May 20th',
        eventActivity: 'Tortuga\'s',
        invitedUsers: [0, 1],
        chat: [],
        votes: [
          {
            id: 0,
            time: '1PM',
            day: 'May 20th',
            locationActivity: 'Tortuga\'s'
          }
        ],
      },
      {
        id: 3,
        notification: false,
        ownerId: 2,
        name: 'Saturday Night Plans',
        status: 'Voting ends in 30 hours',
        message: 'The Bingo Boards are playing at Luigi\'s!',
        eventStage: 0,
        voteTime: null,
        voteTimeSetting: 'Late',
        voteTimeOptions: ['9PM'],
        voteDayOptions: ['May 26th'],
        voteLocationActivityOptions: ['Luigi\'s', 'Smoke Hole', 'Board games at Red\'s'],
        eventTime: null,
        eventDate: null,
        eventActivity: null,
        invitedUsers: [0, 1, 2, 3],
        chat: [],
        votes: [
          {
            id: 0,
            time: '9PM',
            day: 'May 26th',
            locationActivity: 'Luigi\'s'
          }
        ],
      }
    ],
    userDb: [
        {
          id: 0,
          name: 'Red Cortland',
          profilePicture: "https://scontent.fewr1-3.fna.fbcdn.net/v/t1.0-9/10888752_10205808730847554_3785813952988993107_n.jpg?oh=37c3131b705502bca2ec37e6e322ae21&oe=59E366A1",
          votesFor: ['Sushi', 'Bowling', 'Live Music', 'Brooklyn'],
          topFriends: [1, 2, 3],
          invitedEvents: [0,1,2,3]
        },
        {
          id: 1,
          name: 'Violet Eudicot',
          profilePicture: "https://scontent.fewr1-3.fna.fbcdn.net/v/t1.0-9/18425194_1339945392721618_3349501672049216907_n.jpg?oh=5cd03409be8d14d3f2d2898f4ff82b5f&oe=59AB672A",
          votesFor: ['Brunch', 'Outdoors', 'Sports', 'Healthy'],
          topFriends: [0],
          invitedEvents: [0,2,3]},
        {
          id: 2,
          name: 'Blue Amson',
          profilePicture: "https://scontent.fewr1-3.fna.fbcdn.net/v/t1.0-9/18402913_1673719822658192_6059956215396574961_n.jpg?oh=e072c7df776664d374fb417af63a35ad&oe=59D69155",
          votesFor: ['Free', 'Sandwiches', 'Just Hang Out', 'Brooklyn'],
          topFriends: [0,3],
          invitedEvents: [0,1,3]
        },
        {
          id: 3,
          name: 'Amber Fields',
          profilePicture: "https://scontent.fewr1-3.fna.fbcdn.net/v/t1.0-9/1910644_10204752992527659_9100597016961280937_n.jpg?oh=04716d37c80419554ddc1bd6a906be0b&oe=59E912E1",
          votesFor: ['Black Tie', 'Ballroom Dancing', 'Fine Dining', 'Manhattan'],
          topFriends: [1,3],
          invitedEvents: [1,3]
        }
    ]
  }


  constructor() {

  }


  public searchFriends(searchTerm){
    return this.data.userDb.filter((user) => {
      return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
