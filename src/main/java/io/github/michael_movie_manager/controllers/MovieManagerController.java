package io.github.michael_movie_manager.controllers;

import io.github.michael_movie_manager.models.Movie;
import io.github.michael_movie_manager.repositories.MovieRepository;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
@RequestMapping("api/movies")
public class MovieManagerController {

    @Autowired
    private MovieRepository movieRepository;

    @RequestMapping
    public Iterable<Movie> getMovies() {
        return movieRepository.findAll();
    }

    @RequestMapping(value = "create", method = RequestMethod.POST)
    public Movie createMovie(@Valid @RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

    @RequestMapping(value = "update", method = RequestMethod.POST)
    public Movie updateMovie(@Valid @RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

    @RequestMapping(value = "delete/{id}", method = RequestMethod.DELETE)
    public void deleteMovie(@PathVariable Long id) throws Exception {
        if (id == null) throw new Exception("Id must not be null");
        movieRepository.delete(id);
    }
    
}