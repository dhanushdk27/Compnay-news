import { Container, Divider } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navcontant from '../../Navcom/Navcontant';
import Topname from '../../Navcom/Topname';
import Accounts from './Companydetails/Accounts';
import Companydetails from './Companydetails/Companydetails';

function Alldetails(props) {
    return (
        <div>
            <Topname/>
            <Navcontant />
            <br/>
            <br/>
            <Container style={{boxShadow: "3px 4px 10px rgb(18 30 82 / 50%)", height:"fit-content" ,background: '#000' }}>
                <Companydetails/>
            </Container>
            <br></br>
            <Container>
                <Accounts/>
            </Container>
            <Footer/>
        </div>
    );
}

export default Alldetails;