import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { MovieLengthRenderComponent } from './movie-length-render.component';
import { MoviesService } from '../services/movies.service';

@Component({
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {

  settings = {
    delete: {
      deleteButtonContent: '<i class="btn btn-sm btn-danger fa fa-times"></i>',
      confirmDelete: true,
    },
    add: {
      addButtonContent: '<i class="btn btn-primary fa fa-plus"></i>',
      createButtonContent: '<i class="btn btn-sm btn-success fa fa-save"></i>',
      cancelButtonContent: '<i class="btn btn-sm btn-danger fa fa-times"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="btn btn-sm btn-info fa fa-cog"></i>',
      saveButtonContent: '<i class="btn btn-sm btn-success fa fa-save"></i>',
      cancelButtonContent: '<i class="btn btn-sm btn-danger fa fa-times"></i>',
      confirmSave: true,
    },
    columns: {
      title: {
        title: 'Title',
        type: 'html',
        valuePrepareFunction: (value, row) => {
          return `<a href="/movies/${row.id}">${value}</a>`;
        }
      },
      format: {
        title: 'Format',
        editor: {
          type: 'list',
          config: {
            list: [{ value: 'VHS', title: 'VHS' }, { value: 'DVD', title: 'DVD' }, { value: 'STREAMING', title: 'Streaming' }]
          }
        }
      },
      length: {
        title: 'Length',
        type: 'custom',
        renderComponent: MovieLengthRenderComponent
      },
      releaseYear: {
        title: 'Release Year'
      },
      rating: {
        title: 'Rating'
      }
    }
  };

  err: any;

  source: LocalDataSource;

  constructor(private moviesService: MoviesService) {
    this.source = new LocalDataSource();
  }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(movies => this.source.load(movies));
  }

  onCreateConfirm(event) {
    this.err = null;
    const movie = event.newData;
    // Need to validate format here. Backend cannot deserialize empty string to enum.
    if (!movie.format) {
      this.err = 'Movie format required';
      event.confirm.reject();
      return;
    }
    this.moviesService.createMovie(movie).subscribe(() => event.confirm.resolve(movie), err => {
      this.err = err.json();
      event.confirm.reject()
    });
  }

  onSaveConfirm(event) {
    this.err = null;
    const movie = event.newData;
    this.moviesService.updateMovie(movie).subscribe(() => event.confirm.resolve(movie), err => {
      this.err = err.json();
      event.confirm.reject()
    });
  }

  onDeleteConfirm(event) {
    this.err = null;
    const movie = event.data;
    this.moviesService.deleteMovie(movie.id).subscribe(() => event.confirm.resolve(movie), err => {
      this.err = err;
      event.confirm.reject()
    });
  }

}
