import React from 'react'
import './banner.css'
const Banner=()=>{
    return <header className='banner'
    style={{
        backgroundSize:'cover',
        backgroundImage:`url("https://occ-0-3189-300.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbAhWrgpOt7uvhjFVCB4ztX-mtJnMyl_M_SYigjJcGzcpxWDA1FdNZVhBV_JwbhNevHK5fq4dwa8rE36GsM97sWdXm5q.webp?r=541")`
   ,
backgroundPosition:"center center",
}}
    >
       <div className="banner_content">
           <h1 className='banner__title'>LEAP YEAR</h1>
           <div className="banner__buttons">
               <button className="banner__button">
                PLAY
               </button>
               <button className="banner__button">
                   My List
               </button>
           </div>
           <h1 className="banner__description">
Leap Year (2010 film) - Wikipedia
en.wikipedia.org › wiki › Leap_Year_(2010_film)
Leap Year is a 2010 romantic comedy road film directed by Anand Tucker and written by Harry Elfont and Deborah Kaplan. Loosely based on I Know Where I'm Going!, the film stars Amy Adams and Matthew Goode.</h1>
            </div>
            <div className="banner--fadeBottom">
                
            </div>
    </header>
}

export default Banner;