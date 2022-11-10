import './App.css';
import {useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import MovieCard from './MovieCard';

//site - omdbapi.com/apikey.aspx
//4cf79892

const API_URL="http://omdbapi.com?apikey=4cf79892";

const App=()=> {
  const [searchValue,setSearchValue]=useState('');
  const [movies,setMovies]=useState([]);

  const searchMovies=async(searchValue)=>{
    const response=await fetch(`${API_URL}&s=${searchValue}`)
    const data=await response.json();
    setMovies(data.Search);
    //console.log("fetch data---",data.Search);  
  }
  //console.log("movies---",movies);
  const handleSubmit=()=>{
    searchMovies(searchValue);
    setSearchValue('');
    //console.log(movies);
  }
  return (
    <div className={movies?.length>0? 'flex flex-col bg-black text-white h-full w-screen':'flex flex-col bg-black text-white h-screen w-screen'}>
      <div className='flex justify-center p-10'>
        <h1 className='font-bold text-5xl font-serif text-shadow'>MovieLand</h1>
      </div>
      <div className='flex justify-center gap-5'>
        <input type="text" className='text-black pl-2 h-8 w-96 shadow-lg shadow-gray-500 rounded' 
        placeholder='Search a movie' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
        <div>
          <BsSearch size={30} onMouseOver={({target})=>target.style.color="white"}
            onMouseOut={({target})=>target.style.color="gray"} onClick={()=>handleSubmit(searchValue)}/>
        </div>
      </div>
      {
        movies?.length>0  
        ? (
          <div className='p-20 gap-8 flex flex-wrap'>
          {
            movies.map((movie)=>(
              <MovieCard movie={movie}/>
            ))
          }
          </div>
        ):
        (
          <div className='flex justify-center p-20'>No movies found</div>
        )
      }
    </div>
  );
}

export default App;