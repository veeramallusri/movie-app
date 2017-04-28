import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { Movie } from '../models/movie';

@Injectable()
export class MoviesService {

  constructor(private http: Http) { }

  getMovies() {
    return this.http.get('/api/movies').map(response => response.json());
  }

  getMovie(id: number) {
    return this.http.get(`/api/movies/${id}`).map(response => response.json());
  }

  createMovie(movie: Movie) {
    return this.http.post('/api/movies/create', movie).map(response => response.json());
  }

  updateMovie(movie: Movie) {
    return this.http.post('/api/movies/update', movie).map(response => response.json());
  }

  deleteMovie(id: number) {
    return this.http.delete(`/api/movies/delete/${id}`);
  }

}
