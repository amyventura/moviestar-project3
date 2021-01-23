import React from 'react'
import './trailer.css'
const Trailer=()=>{
    return <header className='trailer'
    style={{
        backgroundSize:'cover',
        backgroundImage:`url("https://myexploringlife.com/wp-content/uploads/2020/03/Bad-Boys-for-Life-2020.jpg")`
   ,
backgroundPosition:"center center",
}}
    >
       <div className="trailer_content">
           <div className="trailer__buttons">
               <button className="trailer__button">
                   <a href="https://www.youtube.com/watch?v=jKCj3XuPG8M" rel="noreferrer" target="_blank">Watch Trailer</a>
               </button>
           </div>
           <h1 className="trailer__description">
           The wife and son of a Mexican drug lord embark on a vengeful quest to kill all those involved in his trial and imprisonment -- including Miami Detective Mike Lowrey. When Mike gets wounded, he teams up with partner Marcus Burnett and AMMO -- a special tactical squad -- to bring the culprits to justice. But the old-school, wisecracking cops must soon learn to get along with their new elite counterparts if they are to take down the vicious cartel that threatens their lives.</h1>
            </div>
            <div className="trailer--fadeBottom">
                
            </div>
    </header>
}

export default Trailer;