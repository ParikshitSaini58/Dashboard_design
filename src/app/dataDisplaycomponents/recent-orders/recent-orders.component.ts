import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss'],
})
export class RecentOrdersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  recentOrder = [
    {
      status: 'Complete',
      order: 355145424,
      name: 'Harpreet',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
    {
      status: 'Incomplete',
      order: 355145424,
      name: 'Ankush Sharma',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
    {
      status: 'Inprocess',
      order: 355145424,
      name: 'Vikash Kumar',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
    {
      status: 'Cancelled',
      order: 355145424,
      name: 'Anuj Sharma',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
  ];

  Inprocess = [
    {
      status: 'Inprocess',
      order: 355145424,
      name: 'Harpreet',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
    {
      status: 'Inprocess',
      order: 355145424,
      name: 'Ankush Sharma',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
    {
      status: 'Inprocess',
      order: 355145424,
      name: 'Vikash Kumar',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
    {
      status: 'Inprocess',
      order: 355145424,
      name: 'Anuj Sharma',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
  ];

  Complete = [
    {
      status: 'Complete',
      order: 355145424,
      name: 'Harpreet',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
    {
      status: 'Complete',
      order: 355145424,
      name: 'Ankush Sharma',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
    {
      status: 'Complete',
      order: 355145424,
      name: 'Vikash Kumar',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
    {
      status: 'Complete',
      order: 355145424,
      name: 'Anuj Sharma',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
  ];

  Cancelled = [
    {
      status: 'Cancelled',
      order: 355145424,
      name: 'Harpreet',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
    {
      status: 'Cancelled',
      order: 355145424,
      name: 'Ankush Sharma',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
    {
      status: 'Cancelled',
      order: 355145424,
      name: 'Vikash Kumar',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
    {
      status: 'Cancelled',
      order: 355145424,
      name: 'Anuj Sharma',
      date: '25 Nov 2022',
      time: '10:54pm',
      totalling: 225142,
    },
  ];

  ids: string = 'Recent';

  openGraph(ids: string) {
    this.ids = ids;
  }
}
