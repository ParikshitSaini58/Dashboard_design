import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private _service: AppServicesService) {
    this._service.clicked.subscribe((res: boolean) => {
      this.clicked = res;
    });
  }

  clicked: boolean = true;

  ngOnInit(): void {}
}
