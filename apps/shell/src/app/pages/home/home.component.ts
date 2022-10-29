import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SHELL_CONST } from '../../core/utils/shell-const';

@Component({
  selector: 'shell-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateIoTPlatform(): void {
    this.router.navigate([SHELL_CONST.ROUTE.APPS.IOT_PLATFORM]);
  }

  navigateFarmBox(): void {
    this.router.navigate([SHELL_CONST.ROUTE.APPS.FARMBOX]);
  }

  navigateNYP(): void {
    this.router.navigate([SHELL_CONST.ROUTE.APPS.NYP]);
  }
}
