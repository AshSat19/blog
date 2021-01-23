import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  postTypes: MenuItem[] = [
    { label: 'Draft', routerLink: './draft' },
    { label: 'Published', routerLink: './published' },
  ];
  activeItem = this.postTypes[0];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url.includes('/published'))
      this.activeItem = this.postTypes[1];
    else this.activeItem = this.postTypes[0];
  }
}
