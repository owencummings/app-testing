import { Component } from '@angular/core';

/**
 * Generated class for the EventListItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */



@Component({
  selector: 'event-list-item',
  templateUrl: 'event-list-item.html'
})
export class EventListItemComponent {

  name: string;
  status: string;
  message: string;

  constructor(/*name, status, message*/) {
    /*
    this.name = name;
    this.status = status;
    this.message = message;
    */
  }

}

/*
events = [
  new EventListItem('Event 1', 'Status', 'Message'),
  new EventListItem('Event 2', 'Status', 'Message'),
  new EventListItem('Event 3', 'Status', 'Message'),
  new EventListItem('Event 4', 'Status', 'Message'),
] */
