import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MoviesService } from '../services/movies.service';

@Injectable()
export class MovieExistsGuard implements CanActivate {

  constructor(private router: Router, private moviesService: MoviesService) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.moviesService.getMovie(route.params['movieId']).map(() => true).catch(err => {
      this.router.navigate(['movies']);
      return of(false)
    });
  }
}
