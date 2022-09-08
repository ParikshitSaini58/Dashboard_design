import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  notification = [
    { username: 'Amil', detail: 'added a new input', time: 'just now' },
    { username: 'Amil', detail: 'added a new input', time: 'just now' },
    { username: 'Amil', detail: 'added a new input', time: 'just now' },
    { username: 'Amil', detail: 'added a new input', time: 'just now' },
    { username: 'Sumit', detail: 'added a new input', time: '1 hr ago' },
    { username: 'Pankaj', detail: 'added a new input', time: '1 hr ago' },
    { username: 'Sumit', detail: 'added a new input', time: '1 hr ago' },
    { username: 'Sumit', detail: 'added a new input', time: '1 hr ago' },
    { username: 'Akash', detail: 'added a new input', time: '4 hr ago' },
    { username: 'Suresh', detail: 'added a new input', time: '4 hr ago' },
    { username: 'Akash', detail: 'added a new input', time: '4 hr ago' },
    { username: 'Akash', detail: 'added a new input', time: '4 hr ago' },
    { username: 'Rajat', detail: 'added a new input', time: '2 days ago' },
    { username: 'Maanoj', detail: 'added a new input', time: '2 days ago' },
    { username: 'Rajat', detail: 'added a new input', time: '2 days ago' },
    { username: 'Rajat', detail: 'added a new input', time: '2 days ago' },
  ];
}
