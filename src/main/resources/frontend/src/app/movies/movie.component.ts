import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';

@Component({
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {
  movie: Movie = new Movie();
  err: any;

  constructor(private router: Router, private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['movieId']) {
        this.moviesService.getMovie(params['movieId']).subscribe(movie => {
          this.movie = movie; console.log(movie)
        }, err => {
          console.log(err);
          this.movie = new Movie();
        });
      } else {
        this.movie = new Movie();
      }
    });
  }

  save() {
    this.err = null;
    const apiObservable = this.movie.id ? this.moviesService.updateMovie(this.movie) : this.moviesService.createMovie(this.movie);
    apiObservable.subscribe(movie => this.router.navigate(['movies']), err => this.err = err.json());
  }
}
