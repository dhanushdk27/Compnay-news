import React from 'react';
import './Footer.css';
import { Col, Row } from 'reactstrap';
import { ClockCircleOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined, VerticalLeftOutlined } from '@ant-design/icons';


function Footer(props) {
    return (

        <Row style={{ display: "flex", justifyContent: "center", backgroundColor: "#000", marginTop: "2rem", width: "100%", alignItems: "baseline" }}>
          
            <Col lg={1}>
            </Col>
            <Col lg={3}>
                <img style={{ height: "7rem" }} src='https://jewelleryexpo.com/wp-content/uploads/2022/07/jewelleryexpo-300x156-1.png' />
                <br></br><br />
                <h6 style={{ color: "#fff", fontWeight: "400", lineHeight: "30px" }}>A unique themed Financial Exhibition and Conference happening to discover the Trading and investing the money into financial markets</h6>
                <br></br><br></br>
                <Row lg={6}>
                    <h4 style={{ color: "#fff", fontWeight: "700" }}><FacebookOutlined /></h4>
                    <h4 style={{ color: "#fff", fontWeight: "400" }}><InstagramOutlined /></h4>
                    <h4 style={{ color: "#fff", fontWeight: "400" }}><TwitterOutlined /></h4>
                    <h4 style={{ color: "#fff", fontWeight: "400" }}><LinkedinOutlined /></h4>
                </Row>
            </Col>
            <Col lg={2}>
                <h3 style={{ color: "#fff", fontWeight: "700" }}>Useful Links</h3>
                <br></br><br />
                <p style={{ color: "#fff", fontWeight: "700", alignItems: 'baseline' }}><VerticalLeftOutlined /> Home</p>
                <p style={{ color: "#fff", fontWeight: "700", alignItems: 'baseline' }}><VerticalLeftOutlined /> About</p>
                <p style={{ color: "#fff", fontWeight: "700", alignItems: 'baseline' }}><VerticalLeftOutlined /> Exhibitors</p>
                <p style={{ color: "#fff", fontWeight: "700", alignItems: 'baseline' }}><VerticalLeftOutlined /> Visit</p>
                <p style={{ color: "#fff", fontWeight: "700", alignItems: 'baseline' }}><VerticalLeftOutlined /> Exhibit</p>
                <p style={{ color: "#fff", fontWeight: "700", alignItems: 'baseline' }}><VerticalLeftOutlined /> Contact US</p>
            </Col>
            <Col lg={3}>
                <h3 style={{ color: "#fff", fontWeight: "700" }}>Instagram Gallery</h3>
                <br /><br />
                <Row lg={3}>
                    <img src='https://moneyexpoindia.com/assets/images/gallery/01.jpg' />
                    <img src='https://moneyexpoindia.com/assets/images/gallery/01.jpg' />
                    <img src='https://moneyexpoindia.com/assets/images/gallery/01.jpg' />

                </Row>
                <br />
                <Row lg={3}>
                    <img src='https://moneyexpoindia.com/assets/images/gallery/01.jpg' />
                    <img src='https://moneyexpoindia.com/assets/images/gallery/01.jpg' />
                    <img src='https://moneyexpoindia.com/assets/images/gallery/01.jpg' />

                </Row>
            </Col>
            <Col lg={3}>
                <h3 style={{ color: "#fff", fontWeight: "700" }}>Get in Touch</h3>
                <br></br><br />
                <p style={{ color: "#fff", fontWeight: "700", alignItems: 'baseline' }}><ClockCircleOutlined /> 11 - 12 Aug 10:00AM - 6:00PM
                </p>
                <h5 style={{ color: "rgb(255, 204, 102)", fontWeight: "700", marginLeft: '19px' }}>DATE & TIME</h5>
                <p style={{ color: "#fff", fontWeight: "700", alignItems: 'baseline' }}><MailOutlined /> info@moneyexpoindia.com</p>
                <h5 style={{ color: "rgb(255, 204, 102)", fontWeight: "700", marginLeft: '19px' }}>MAIL TO US</h5>
                <p style={{ color: "#fff", fontWeight: "700", alignItems: 'baseline' }}><VerticalLeftOutlined /> Sahara Star Hotel, Mumbai</p>
                <h5 style={{ color: "rgb(255, 204, 102)", fontWeight: "700", marginLeft: '19px' }}>VENUE</h5>
            </Col>

            <Row >
               <Col  style={{background:'#ffbf00',height:"3rem",borderRadius:'3rem',alignItems:'center'}}lg={9}>
               <Row>
              
                    </Row>
                </Col >
            </Row>
        </Row>


    );
}

export default Footer;