import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './modal.css'
import Episode from '../episode/episode.component';
import MovieCard from '../card/card.component';


const AlertModal=(props)=> {
const epi=[1,2,3,4,5,6,7,8,9];
const relate=[1,2,3,4,5,6];

    return (
      <div>
      <Modal
        {...props}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
        className="special_modal"
      >
        
        <Modal.Body closeButton>
          <div className='preview'>
 <img src={props.activeMovie.poster_url} alt="poster" style={{width:'100%'}} />
           <button className="description__button">
                PLAY
               </button>
               <span className="name">{props.activeMovie.name}</span>
          </div>

          <div className="about">
            <p className="highlight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, omnis inventore. Aliquid voluptate ratione commodi tenetur quisquam quibusdam omnis. Sed perferendis nisi velit blanditiis repudiandae sequi dignissimos numquam obcaecati cumque!</p>
            <div className="cast">
              <span className="lable">cast : </span>
              <span className="lable__white">Lorem ipsum dolor,</span>
<br/>
              <span className="lable">genre : </span>
              <span className="lable__white">Lorem ipsum dolor,</span>
              <br/>
              <span className="lable">This show is : </span>
              <span className="lable__white">Lorem ipsum dolor,</span>

            </div>
          </div>
          <div className="season_ep">
            <span className="title">Episodes</span>
            <select name="season" id="season" className="season">

              <option value="1">Season 1</option>
              <option value="2">Season 2</option>
              <option value="3">Season 3</option>
              <option value="4"> Season4</option>

            </select>
          </div>
          <div style={{padding:'0 50px'}}>
{
  epi.map((epp,index)=><Episode ep={index} key={index + "e"}  />)
}
          </div>
          
<div className="related">
{
  relate.map((rel,index)=><MovieCard key={index} />)
}
</div>
<div className="about__movie">
  <h1>About </h1>
<span className="lable">cast : </span>
              <span className="lable__white">Lorem ipsum dolor,</span>
<br/>
              <span className="lable">genre : </span>
              <span className="lable__white">Lorem ipsum dolor,</span>
              <br/>
              <span className="lable">This show is : </span>
              <span className="lable__white">Lorem ipsum dolor,</span>

</div>
        </Modal.Body>
      </Modal>
      </div>
    );
  }
  export default AlertModal;
