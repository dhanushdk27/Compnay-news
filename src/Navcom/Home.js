import { Container } from '@mui/material';
import React, { Fragment, useEffect, useRef, useState }  from 'react';
import Navcontant from './Navcontant';
import Topname from './Topname';
import Imagecard from '../components/Imagecard/Imagecard';
import Company from '../components/Company';
import News from '../components/Newscomponents/News';
import Homes from '../components/Scroll/Homes';
import Footer from '../components/Footer/Footer';

function Home(props) {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);
    
    return (
        <div>
            
            <Topname />
         
            <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
            <Navcontant />
            </div>
            <br/> 
           <Imagecard/>
        
            <br/>
            <Container style={{display:'flex',justifyContent: 'space-around',gap: "10px",boxShadow: ' 0.5rem 0.5rem black, -0.5rem -0.5rem #ccc',width:"100%"}}>
                <Company/>
                <News/>
            </Container>
            <br/> <br/>
            <Homes/>
            <Footer/>
        </div>
    );
}

export default Home;