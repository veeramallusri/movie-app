import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GoogleSignInComponent } from './components/google.component';

const ROUTES = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'movies', loadChildren: './movies/movies.module#MoviesModule' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    GoogleSignInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
