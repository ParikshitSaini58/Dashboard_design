import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private _service: AppServicesService) {
    this._service.clicked.subscribe((res: boolean) => {
      this.clicked = res;
    });
  }

  clicked: boolean = true;

  trigermenu() {
    this.clicked = !this.clicked;
    this._service.clicked.next(this.clicked);
  }
  ngOnInit(): void {}
}
