import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const baseUrl = 'http://192.168.0.105';
const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getMovies() {
    return this.httpClient.get(`${baseUrl}/movies`);
  }
}
