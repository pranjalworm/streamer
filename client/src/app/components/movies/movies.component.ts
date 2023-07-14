import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/app-routing.module';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies: any;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }

  movieClickHandler(index: number) {
    const movieName = this.movies[index].name;

    this.router.navigate(['video-player', movieName]);
  }
}
