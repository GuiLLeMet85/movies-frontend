import React from 'react';
import { Link, Outlet} from 'react-router-dom';

export default function Card(props) {

  const {movie} = props;
  
    return (
      <div className="beer-card" key={movie._id}>
        {movie && (
          <div className="beer-img">
              <img src={movie.image} alt="{movie.title}"></img>
              <Link to={`/movie/${movie._id}`}>
              <h2>Title: {movie.title}</h2>
              {/* <p>Year: {movie.year}</p>
              <p>Director: {movie.director}</p>
              <p>Duration: {movie.duration}</p>
              <p>Synopsis: {movie.synopsis}</p> */}
              </Link>
              <Outlet />
          </div>
        )}
      </div>
);
}
