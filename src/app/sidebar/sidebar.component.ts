import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  clicked: boolean = true;

  constructor(private _service: AppServicesService) {
    this._service.clicked.subscribe((res: boolean) => {
      this.clicked = res;
    });
  }

  ngOnInit(): void {}

  trigermenu() {
    this.clicked = !this.clicked;
    this._service.clicked.next(this.clicked);
  }
}
