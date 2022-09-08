import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ids: string = 'day';

  openGraph(ids: string) {
    this.ids = ids;
  }

  overviewData = [
    { market: 'Punjab', rupee: 4521524, quantity: '100%' },
    { market: 'Haryana', rupee: 4534524, quantity: '70%' },
    { market: 'Andra pradesh', rupee: 123524, quantity: '60%' },
    { market: 'Bihar', rupee: 9876524, quantity: '20%' },
    { market: 'Gujrat', rupee: 5671524, quantity: '10%' },
  ];
}
