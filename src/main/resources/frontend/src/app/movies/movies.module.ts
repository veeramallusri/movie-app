import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MoviesService } from '../services/movies.service';
import { MoviesComponent } from './movies.component';
import { MoviesModalComponent } from './movies-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      { path: '', component: MoviesComponent }
    ]),
    NgbModule.forRoot()
  ],
  declarations: [MoviesComponent, MoviesModalComponent],
  entryComponents: [MoviesModalComponent],
  providers: [MoviesService]
})
export class MoviesModule { }
