CREATE DATABASE movie_db;
connect movie_db;

 CREATE TABLE person (
  id serial PRIMARY KEY,
  firstName text NOT NULL,
  secondName text NOT NULL,
  occupation text NOT NULL,
  age integer NOT NULL
);

 CREATE TABLE actor (
  id serial PRIMARY KEY,
  firstName text NOT NULL,
  secondName text NOT NULL,
  additional text,
  age integer NOT NULL
);

 CREATE TABLE dub (
  id serial PRIMARY KEY,
  firstName text NOT NULL,
  secondName text NOT NULL,
  additional text,
  age integer NOT NULL
); 

 CREATE TABLE genre (
  id serial PRIMARY KEY,
  description text NOT NULL
); 

 CREATE TABLE country (
  id serial PRIMARY KEY,
  description text NOT NULL,
  numViews integer NOT NULL Default 1
); 

 CREATE TABLE movie (
  id serial PRIMARY KEY,
  releaseYear integer NOT NULL Default 1895,
  country_id integer REFERENCES country(id),
  genre_id integer REFERENCES genre(id),
  director_id integer REFERENCES person(id),
  writer_id integer REFERENCES person(id),
  music_id integer REFERENCES person(id),
  producer_id integer REFERENCES person(id),
  budget integer NOT NULL Default 1,
  rating numeric NOT NULL Default 1,
  movieName text
); 

CREATE TABLE actor_movie (
  actor_id integer REFERENCES actor(id),
  movie_id integer REFERENCES movie(id),
  PRIMARY KEY (actor_id, movie_id)
);

CREATE TABLE dub_movie (
  dub_id integer REFERENCES dub(id),
  movie_id integer REFERENCES movie(id),
  PRIMARY KEY (dub_id, movie_id)
);

 CREATE TABLE view (
  id serial PRIMARY KEY,
  countryName text NOT NULL,
  number integer NOT NULL Default 1
); 

CREATE TABLE view_movie (
  view_id integer REFERENCES view(id),
  movie_id integer REFERENCES movie(id),
  PRIMARY KEY (view_id, movie_id)
);
