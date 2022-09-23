import { GithubOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Col, Row } from 'reactstrap';
import './Navcom.css';


function Topname(props) {  




    return (
        <Row style={{ backgroundColor: '#000', display: "flex", justifyContent: 'center', alignItems: 'center' ,width:"100%"}}>
            <Col lg={1}>

            </Col>
            <Col lg={2}>
                <a href='/'><img style={{ height: "5rem" }} src='https://jewelleryexpo.com/wp-content/uploads/2022/07/jewelleryexpo-300x156-1.png' /></a>
            </Col>
            <Col lg={3}>
                <div style={{
                    width: '18rem',
                    height: '54px',
                    padding: '6px 6px 6px 24px',
                    background: '#fff',
                    borderRadius: '97px',
                    transition: 'all .3s',
                    display: 'flex',
                    position: 'relative',
                    zIndex:' 1',
                    overflow: 'hidden',
                    }}  ><p style={{marginTop:'0.5rem'}}>please Enter Name</p><h3 ><SearchOutlined /></h3></div>
            </Col>
            <Col lg={1}>
                <h3 style={{ color: '#fff' }}><UserOutlined /></h3>
            </Col>
            <Col lg={2}>
            <button style={{
                            width: "120px",
                            height: "42px", background: "#ffbf00",
                            border: "1px solid #FCD462",
                            color: "#000",
                            fontWeight: "500",
                            fontSize: "18px",
                            borderRadius:"8px"
                        }} >Book Tickets</button>
                        <br />
            </Col>
            <Col lg={1}>
            <button style={{
                            width: "150px",
                            height: "42px", background: "transparent",
                            border: "1px solid #FCD462",
                            color: "#fff",
                            fontWeight: "500",
                            fontSize: "18px",
                            borderRadius:"8px"
                        }} >Book A Stand</button>
            </Col>
            <Col lg={2}>
            </Col>
            
        </Row>
    );
}

export default Topname;