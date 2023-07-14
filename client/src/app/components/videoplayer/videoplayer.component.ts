import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css'],
})
export class VideoplayerComponent {
  movieName: string | null = null;
  url: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.movieName = params.get('movieName');
      console.log('movieName', this.movieName);
    });

    this.moviesService
      .getMovieUrl(this.movieName as string)
      .subscribe((data: any) => {
        const { url } = data;
        this.url = 'file://' + url;
      });
  }
}
