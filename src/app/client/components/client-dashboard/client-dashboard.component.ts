import { Component, OnInit } from '@angular/core';
import { BlogPostSimple } from 'src/app/shared/models/post';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss'],
})
export class ClientDashboardComponent implements OnInit {
  posts: BlogPostSimple[] = [
    {
      slug: 'test1',
      title: 'Test Post 1',
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
      sed consequuntur error repudiandae numquam deserunt quisquam repellat
      libero asperiores earum nam nobis, culpa ratione quam perferendis
      esse, cupiditate neque quas!`,
      imageURL:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      category: 'Category 1',
      createdDate: Date.now(),
    },
    {
      slug: 'test2',
      title: 'Test Post 2',
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
      sed consequuntur error repudiandae numquam deserunt quisquam repellat
      libero asperiores earum nam nobis, culpa ratione quam perferendis
      esse, cupiditate neque quas!`,
      imageURL:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      category: 'Category 2',
      createdDate: Date.now(),
    },
    {
      slug: 'test3',
      title: 'Test Post 3',
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
      sed consequuntur error repudiandae numquam deserunt quisquam repellat
      libero asperiores earum nam nobis, culpa ratione quam perferendis
      esse, cupiditate neque quas!`,
      imageURL:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      category: 'Category 3',
      createdDate: Date.now(),
    },
    {
      slug: 'test4',
      title: 'Test Post 4',
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
      sed consequuntur error repudiandae numquam deserunt quisquam repellat
      libero asperiores earum nam nobis, culpa ratione quam perferendis
      esse, cupiditate neque quas!`,
      imageURL:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      category: 'Category 4',
      createdDate: Date.now(),
    },
    {
      slug: 'test5',
      title: 'Test Post 5',
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
      sed consequuntur error repudiandae numquam deserunt quisquam repellat
      libero asperiores earum nam nobis, culpa ratione quam perferendis
      esse, cupiditate neque quas!`,
      imageURL:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      category: 'Category 5',
      createdDate: Date.now(),
    },
    {
      slug: 'test6',
      title: 'Test Post 6',
      summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
      sed consequuntur error repudiandae numquam deserunt quisquam repellat
      libero asperiores earum nam nobis, culpa ratione quam perferendis
      esse, cupiditate neque quas!`,
      imageURL:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      category: 'Category 6',
      createdDate: Date.now(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
