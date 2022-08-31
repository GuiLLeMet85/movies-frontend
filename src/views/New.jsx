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
    image:''
  });
  
  const handleChange = (e) => {
    setNewMovie(prev => {
      return {
        ...prev,
        [e.target.name]: e.targetvalue
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMovieData = await axios.post('http://localhost:8000/api/v1/new', newMovie)
      console.log(newMoie)
      navigate(`/new`)
    }

  }



  return (
    <div>
      <h2>Create a movie</h2>
      


     
    </div>
  )
}
