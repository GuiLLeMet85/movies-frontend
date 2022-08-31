import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link, Outlet} from "react-router-dom"
import Card from '../components/Card';


export default function Beers(){

    const [movies, setMovies]= useState([]);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/v1/movies')
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
              {!movies && <p> Loading</p>}
            
              {movies.length > 0 && movies.map(movie => {  
                return <Card key={movie._id} movie={movie} />
              })} 
              <button> Edit the movie</button>
              <button> Delete the movie</button>
              <Outlet />
          </div>
      )
}