import { Container } from '@mui/material';
import React from 'react';
import Navcontant from '../../Navcom/Navcontant';
import Topname from '../../Navcom/Topname';
import Footer from '../Footer/Footer';
import News from '../Newscomponents/News';
import Latestnews from './Latestnews';

function Newsdetail(props) {
    return (
        <div>
            <Topname/>
            <Navcontant/>
            <Container style={{display:'flex',justifyContent: 'space-around',boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px", height:"fit-contant" }}>
                <News/>
            </Container>
            <br/><br/>
            <Container style={{boxShadow: " 0 -5px 3px -3px black, 0 5px 3px -3px ", height:"fit-contant" }}>
                <Latestnews/>
            </Container>
            <Footer/>
        </div>
    );
}

export default Newsdetail;
