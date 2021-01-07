import React,{useState} from 'react'
import AlertModal from '../alert modal/alert-modal.component';
import CustomModal from '../modal/modal.component';

import {movies} from './data.util';

import './rows.css' 

const Row=({title})=> {
    const [show, setShow] = useState(false);
    const [activeMovie,setActiveMovie]=useState({});
    const id =title.toString();
    return (
        <div id={'Favorites'}>
         <h1 className='genre_title'>{title}</h1>
         <div className='row_posters'>
           {
          movies.map((movie,index)=>(
              <img
              key={index}
              className='row_poster'
              src={movie. poster_url}
              alt='poster' onClick={()=>{setShow(true)
            
              setActiveMovie(movie);
            }}
              />
          )  )
         }   
         </div>

        {/* <CustomModal show handdleModal/>÷    */}
        <AlertModal header='Contact' 
          onHide={()=>setShow(false)} 
          show={show} 
          activeMovie={activeMovie}
        />
        </div>
    )
}

export default Row;