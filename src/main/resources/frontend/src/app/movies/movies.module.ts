import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { MoviesService } from '../services/movies.service';
import { MoviesComponent } from './movies.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      { path: '', component: MoviesComponent }
    ]),
    Ng2SmartTableModule,
  ],
  declarations: [MoviesComponent],
  providers: [MoviesService]
})
export class MoviesModule { }
