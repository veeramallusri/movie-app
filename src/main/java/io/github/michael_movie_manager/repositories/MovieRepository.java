package io.github.michael_movie_manager.repositories;

import io.github.michael_movie_manager.models.Movie;

import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<Movie, Long> {
}
