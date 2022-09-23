import { Container, ScopedCssBaseline } from '@mui/material';
import React from 'react';
import Scroll from './Scroll';

function Homes(props) {
    return (

        <Container style={{display:'flex',justifyContent: 'space-around',boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px"}}>
            <Scroll/>
        </Container>
        
    );
}

export default Homes;