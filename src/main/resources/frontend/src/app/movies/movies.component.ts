import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { MoviesService } from '../services/movies.service';
import { MoviesModalComponent } from './movies-modal.component';
import { Movie } from '../models/movie';

@Component({
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private modalService: NgbModal, private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(movies => this.movies = movies);
  }

  showModal(movie) {
    const modalRef = this.modalService.open(MoviesModalComponent);
    modalRef.componentInstance.movie = movie ? { ...movie } : new Movie();
    modalRef.result.then(result => {
      if (!result) return;
      const index = this.movies.findIndex(movie => movie.id === result.id);
      if (index != -1) this.movies[index] = result;
      else this.movies.push(result);
    });
  }

  deleteMovie(id: number) {
    this.moviesService.deleteMovie(id).subscribe(() => this.movies = this.movies.filter(movie => movie.id !== id));
  }

}
