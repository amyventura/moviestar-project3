import React from 'react';
import CustomNav from '../../components/nav/nav.components';


import {Container } from './home-page.styles';

import Row from '../../components/row/rows.component'
import Banner from '../../components/banner/banner.component';
import Navs from '../../components/custom-nav/custom-nav.component';



const Home =()=>{
    
    return <Container>
        {/* <CustomNav/> */}
        <Navs/>
        <Banner/>
        {/* <img class="hero " src="https://occ-0-3189-300.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbAhWrgpOt7uvhjFVCB4ztX-mtJnMyl_M_SYigjJcGzcpxWDA1FdNZVhBV_JwbhNevHK5fq4dwa8rE36GsM97sWdXm5q.webp?r=541" alt=""></img> */}
        <Row title='Favorites '/>
        <Row title='Watch Later '/>
        <Row title='Horror '/>
        <Row title='Drama '/>
        <Row title='Comedy '/>
        <Row title='New Realese '/>
        <Row title='Children Action'/>



 
    </Container>
}
export default Home;