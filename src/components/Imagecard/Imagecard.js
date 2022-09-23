import React from 'react';
import './Imagecard.css';
import { Col, Row } from 'reactstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Imagecard(props) {

    const image1 = [
        { src: "https://moneyexpoindia.com//storage/155/62b9395ea116d_diamona-sponsor.png" },
        { src: "https://moneyexpoindia.com//storage/141/62a877316232b_04-_-Qfx.jpg" },
        { src: "https://moneyexpoindia.com//storage/181/62d529841a529_b2broker.jpg" },
        { src: "https://moneyexpoindia.com//storage/193/62da4766a5f33_27.jpg" },
        { src: "https://moneyexpoindia.com//storage/197/62dfb3ea9ee7c_30.jpg" },
        { src: "https://moneyexpoindia.com//storage/175/62d13e02651ae_05.png" },


    ]

    return (
        <Row lg={6}  style={{ width: "100%" ,display:"flex",justifyContent:"space-around",marginLeft: "auto" }}>
            {image1.map(k => (
                 <a href='/Alldetails'>
                       <div class="effect-image-1">
                <Card className='image_animation' sx={{ maxWidth: 250 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="120"
                            image={k.src}
                            alt="green iguana"
                        />
                       <div class="overlay-text-effect-3 overlay-text-2">
                          <img src='https://jewelleryexpo.com/wp-content/uploads/2022/07/jewelleryexpo-300x156-1.png' style={{height:"3.5rem"}}/>
                       </div>
                    </CardActionArea>
                </Card>
                </div>
        
                </a>
            ))}
        </Row>
    );
}

export default Imagecard;