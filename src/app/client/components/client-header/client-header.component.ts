import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss'],
})
export class ClientHeaderComponent implements OnInit {
  @Input() title: string = environment.blogName;
  @Input() subTitle: string = '';
  @Input() mastHeadCover: string | undefined = environment.mastHeadCoverImage

  constructor() {}

  ngOnInit(): void {}
}
