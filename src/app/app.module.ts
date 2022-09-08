import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphBoxComponent } from './dataDisplaycomponents/graph-box/graph-box.component';
import { NotificationsComponent } from './dataDisplaycomponents/notifications/notifications.component';
import { OverviewComponent } from './dataDisplaycomponents/overview/overview.component';
import { RecentOrdersComponent } from './dataDisplaycomponents/recent-orders/recent-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    GraphBoxComponent,
    NotificationsComponent,
    OverviewComponent,
    RecentOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
