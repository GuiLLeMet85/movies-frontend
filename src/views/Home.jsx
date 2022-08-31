import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Outlet} from "react-router-dom"
import Card from '../components/Card';


export default function Movie(){

    const [movies, setMovies]= useState(null);

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/v1/movies')
          //console.log(response)
          setMovies(response.data.data);
        } catch (error) {
          console.error(error)
        }
      }
      getData();
    }, [])

      return (
          <div className="sect-beers"> 
              <h1>Movies</h1> 
      
            
              {movies && movies.map(movie => {  
                return <Card key={movie._id} movie={movie} />
              })} 
           
              <Outlet />
          </div>
      )
}