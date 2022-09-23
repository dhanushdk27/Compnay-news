import { Box, Divider } from '@mui/material';
import React from 'react';
import { Col, Row } from 'reactstrap'
import { Card } from 'antd';
import { PieChart, Pie } from "recharts";
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];


function Companydetails(props) {
    return (

        <Row style={{ display: "flex", justifyContent: "center", height: "fit-content", padding: "1rem" }}>


            <Col lg={3}>
                <Row style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: "3%",
                    textAlign: "center",

                }}>
                    <Col lg={2} style={{ height: "fit-content", textAlign: "center", }} >
                        <Card
                            hoverable
                            style={{ width: 220 }}
                            cover={<img style={{ height: "5rem" }} alt="example" src="https://eimgjys.fx696.com/logo/637920208089502304/FXT637920208089502304_967221.jpg_wiki-template-global" />} >
                        </Card>
                        <br />

                        <Card id='card' style={{ width: 220, height: "7.5rem" }}>
                            <h6 style={{ fontWeight: "400", fontSize: "18px", color: "#fff" }}>Score</h6>
                            <h4 style={{ fontWeight: "500", fontSize: "48px", color: "#fff" }} >9.00<span style={{ fontWeight: "300", fontSize: "28px", color: "rgba(255, 255, 255, 0.132)" }}>/10</span></h4>
                        </Card>
                    </Col>

                </Row>

            </Col>
            <Col lg={5}>
                <Row style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: "3%"
                }}>
                    <h2 style={{ fontWeight: "600", fontSize: "28px", color: "#fff" }}>XM</h2>
                    <br />

                    <Row>
                        <Col>
                            <h6 style={{ fontWeight: "400", fontSize: "18px", color: "#fff" }}>Cyprus</h6>
                        </Col>
                        <Col>
                            <h6 style={{ fontWeight: "400", fontSize: "18px", color: "#fff" }}>10-15 years</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6 style={{ fontWeight: "400", fontSize: "18px", color: "#fff" }}>Regulated in Australia</h6>
                        </Col>
                        <Col>
                            <h6 style={{ fontWeight: "400", fontSize: "18px", color: "#fff" }}>Market Making(MM)</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6 style={{ fontWeight: "400", fontSize: "18px", color: "#fff" }}>MT4/5 full license</h6>
                        </Col>
                        <Col>
                            <h6 style={{ fontWeight: "400", fontSize: "18px", color: "#fff" }}>Global Business</h6>
                        </Col>
                    </Row>
                    <Row>
                        <button style={{
                            marginTop: "2rem", width: "264px",
                            height: "42px", background: "#F4008C",
                            border: "1px solid #477db2",
                            color: "#fff",
                            fontWeight: "500",
                            fontSize: "18px",
                            borderRadius:"8px"
                        }} >Open Account</button>
                        <br />
                        <button style={{
                             marginTop: "2rem", width: "264px",
                             height: "42px", background: "rgba(94, 176, 92, 0.8)",
                             border: "rgba(94, 176, 92, 0.8)",
                             color: "#fff",
                             fontWeight: "500",
                             fontSize: "18px",
                             borderRadius:"8px"
                        }} >Website</button>
                    </Row>

                </Row>
            </Col>
            <Col lg={4} >
                <Row style={{
                    display: "flex",
                    justifyContent: "flex-star",
                    padding: "3%",
                }}>

                    <Card id='card' style={{ height: "10rem", width: 300 }} >
                        <PieChart style={{ top: "-7rem", marginLeft: "-7rem" }} width={300} height={300}>
                            <Pie
                                dataKey="value"
                                startAngle={180}
                                endAngle={0}
                                data={data}
                                cx={200}
                                cy={200}
                                outerRadius={80}
                                fill="#fc6"
                                label
                            />
                        </PieChart>
                    </Card>

                    <Row style={{ marginTop: '2rem', display: "flex", justifyContent: "space-around" }}>
                        <Card id='card' style={{ width: 130, height: "6rem" }}>
                            <h6 style={{ fontWeight: "400", fontSize: "18px", color: "rgba(255, 255, 255, 0.307)" }}>Benchmark</h6>
                            <h2 style={{ fontWeight: "400", fontSize: "28px", color: "#fff" }} >AAA</h2>
                        </Card>
                        <Card id='card' style={{ width: 130, height: "6rem" }}>
                            <h6 style={{ fontWeight: "400", fontSize: "18px", color: "rgba(255, 255, 255, 0.307)" }}>Influence</h6>
                            <h2 style={{ fontWeight: "400", fontSize: "28px", color: "#fff" }} >AAA</h2>
                        </Card>
                    </Row>
                </Row>
            </Col>
        </Row>

    );
}

export default Companydetails;