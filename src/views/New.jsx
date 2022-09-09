import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function New() {

  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState({
    title: '',
    year: '',
    director: '',
    duration: '',
    synopsis: '',
    image: ''
  })
  
  const handleChange = (e) => {
    const conditionalValue = e.target.name === 'year' && e.target.name === 'duration' ? parseInt(e.target.value) : e.target.value;
    console.log(conditionalValue)
    setNewMovie(prev => {
      return {
        ...prev,
        [e.target.name]: conditionalValue
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMovieData = await axios.post('http://localhost:8000/api/v1/movies', newMovie)
      console.log(newMovieData)
      navigate(`/movie/${newMovieData.data.data._id}`)
    }
    catch (error) {
      console.error(error);
    }
   }

  return (
    <div>
      <h2>Create a movie</h2>

            <form className="add-form" onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder='Title' value={newMovie.title} onChange={handleChange} />
                <input type="number" name="year" placeholder='Year of movie' value={newMovie.year} min="1900" max="2030" onChange={handleChange} />
                <input type="text" name="director" placeholder='Director' value={newMovie.director} onChange={handleChange} />
                <input type="number" name="duration" placeholder='Duration' value={newMovie.duration} min="1" max="540" onChange={handleChange} />
                <input type="text" name="synopsis" placeholder='Synopsis' value={newMovie.synopsis} className= "description-input" onChange={handleChange} />
                <input type="text" name="image" placeholder='URL image' value={newMovie.image} onChange={handleChange} />
              
                <button type="submit">Save</button>
            </form> 
    </div>
  )
}
