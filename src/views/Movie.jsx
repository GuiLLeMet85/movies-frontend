import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Movie() {
 
 const {id} = useParams();
 const [movieDet, setMovieDet] = useState(null);
 const navigate = useNavigate();


  useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/movies/${id}`)
      setMovieDet(response.data.data);
    } catch (error) {
      console.error(error)
    }
  }
  getData();
}, [id])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/movies/${id}`)
      navigate('/');
    } 
    catch (error) {
      console.error(error)
    }
}

  return (
    

     <div className="sect-beers">
      
      <h2>Movie details</h2>
      
      
      {movieDet && (
      
        <div className="beer-img">  
          <img src={movieDet.image} alt="{movieDet.title}"></img>
          <div className='movie-info'>
              <h3>Title: {movieDet.title}</h3>
              <p>Director: {movieDet.director}</p>
              <p>Year: {movieDet.year}</p>
              <p>Duration: {movieDet.duration}</p>
              <p>Synopsis: {movieDet.synopsis}</p> 
          </div>
          <div className="buttons-detail">
              <button onClick={handleDelete}>Delete movie</button>
              <button onClick={() => navigate(`/edit/${id}`)}>Edit movie</button>
          </div>
        </div>
        )}
  </div>
  )
}
