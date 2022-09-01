import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

useEffect(()=> {
  const getData = async ()=> {
    try {
      const movie = await axios.get(`http://localhost:8000/api/v1/movies/${id}`);
      setMovie(movie.data.data);
    }
    catch (error) {
      console.error(error);
    }
  } 
getData();
}, [id])


const handleChange = (e) => {
  setMovie(prev => {
    return {
      ...prev,
      [e.target.name]: e.target.value
    }
  })
  console.log(movie)
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const editMovie = await axios.put(`http://localhost:8000/api/v1/movies/${id}`, movie);
    navigate (`/movie/${editMovie.data.data._id}`)  
  }
  catch (error) {
    console.error(error)
  }
}

return (
      <div>
          <h2>Edit a movie</h2>
          {movie && (
              <form className="add-form" onSubmit={handleSubmit}>
                  <input type="text" name="title" placeholder='Title' value={movie.title} onChange={handleChange} />
                  <input type="number" name="year" placeholder='Year of movie' value={movie.year} min="1900" max="2030" onChange={handleChange} />
                  <input type="text" name="director" placeholder='Director' value={movie.director} onChange={handleChange} />
                  <input type="number" name="duration" placeholder='Duration' value={movie.duration} min="1" max="540" onChange={handleChange} />
                  <input type="text" name="synopsis" placeholder='Synopsis' value={movie.synopsis} className= "description-input" onChange={handleChange} />
                  <input type="text" name="image" placeholder='URL image' value={movie.image} onChange={handleChange} />
                
                  <button type="submit">Save</button>
              </form> 
          )}
          </div>
        )
      }