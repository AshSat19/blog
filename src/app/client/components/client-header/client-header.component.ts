import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss'],
})
export class ClientHeaderComponent implements OnInit {
  @Input() title: string = "Ashwin Sathian's Blog";
  @Input() mastHeadCover: string | undefined =
    'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80';
  @Input() subTitle: string | undefined = '';

  constructor() {}

  ngOnInit(): void {}
}
