import React from 'react'
import './banner.css'
const Banner=()=>{
    return <header className='banner'
    style={{
        backgroundSize:'cover',
        backgroundImage:`url("https://www.denofgeek.com/wp-content/uploads/2019/12/jumanji-next-level-poster.jpeg?fit=1200%2C675")`
   ,
backgroundPosition:"center center",
}}
    >
       <div className="banner_content">
           <h1 className='banner__title'>Jumanji: The Next Level</h1>
           <div className="banner__buttons">
               <button className="banner__button">
                   <a href="https://www.youtube.com/watch?v=rBxcF-r9Ibs" target="_blank">Watch Trailer</a>
               </button>
           </div>
           <h1 className="banner__description">
           When Spencer goes back into the fantastical world of Jumanji, pals Martha, Fridge and Bethany re-enter the game to bring him home. But the game is now broken -- and fighting back. Everything the friends know about Jumanji is about to change, as they soon discover there's more obstacles and more danger to overcome.</h1>
            </div>
            <div className="banner--fadeBottom">
                
            </div>
    </header>
}

export default Banner;