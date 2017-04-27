import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './movies-modal.component.html'
})
export class MoviesModalComponent {
  @Input() movie: Movie;

  constructor(public activeModal: NgbActiveModal, private moviesService: MoviesService) { }

  save() {
    const apiObservable = this.movie.id ? this.moviesService.updateMovie(this.movie) : this.moviesService.createMovie(this.movie);
    apiObservable.subscribe(movie => {
      this.activeModal.close(movie);
    }, err => {
      // TODO: handle error
    });
  }
}
