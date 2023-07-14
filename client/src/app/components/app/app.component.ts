import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/app-routing.module';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  cards = [
    {
      description: 'Movies',
      thumbnail: 'assets/cinema.jpg',
      path: RoutePaths.Movies,
    },
    {
      description: 'Photos',
      thumbnail: 'assets/photos.jpg',
      path: RoutePaths.Photos,
    },
  ];

  cardClickHandler(index: number) {
    this.router.navigate([this.cards[index].path]);
  }
}
