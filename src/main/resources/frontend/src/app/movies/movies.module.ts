import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CustomFormsModule } from 'ng2-validation'
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { MoviesService } from '../services/movies.service';
import { MovieComponent } from './movie.component';
import { MoviesComponent } from './movies.component';
import { MovieExistsGuard } from '../guards/movie-exists';
import { MovieLengthRenderComponent } from './movie-length-render.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    CustomFormsModule,
    RouterModule.forChild([
      { path: '', component: MoviesComponent },
      { path: 'new', component: MovieComponent },
      { path: ':movieId', canActivate: [MovieExistsGuard], component: MovieComponent }
    ]),
    Ng2SmartTableModule
  ],
  declarations: [MovieComponent, MoviesComponent, MovieLengthRenderComponent],
  providers: [MoviesService, MovieExistsGuard],
  entryComponents: [MovieLengthRenderComponent]
})
export class MoviesModule { }
