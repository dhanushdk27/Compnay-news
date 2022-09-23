import { AlignRightOutlined } from '@ant-design/icons';
import React from 'react';
import './Navcom.css';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Col, Row } from 'reactstrap';

function Navcontant(props) {
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    type: 'group',
                    children: [
                        {
                            key: '1-1',
                            label: 'VPS',
                        },
                        {
                            key: '1-2',
                            label: 'Trading environment ranking',
                        },
                        {
                            key: '1-3',
                            label: 'EA',
                        },
                        {
                            key: '1-4',
                            label: 'Bull/bear sentiment',
                        },
                        {
                            key: '1-5',
                            label: 'Liquidation data',
                        },
                        {
                            key: '1-6',
                            label: 'EA Ranking',
                        },
                        {
                            key: '1-7',
                            label: 'Position distribution',
                        },
                        {
                            key: '1-8',
                            label: 'Broker Ranking',
                        },
                    ],
                },
            ]}
        />
    );

    const menu1 = (
        <Menu
            items={[
                {
                    key: '1',
                    type: 'group',
                    children: [
                        {
                            key: '1-1',
                            label: 'All',
                        },
                        {
                            key: '1-2',
                            label: 'Platform',
                        },
                        {
                            key: '1-3',
                            label: 'Exhibition',
                        },
                        {
                            key: '1-4',
                            label: 'Agent',
                        },
                        {
                            key: '1-5',
                            label: 'Recruitment',
                        },
                        {
                            key: '1-6',
                            label: 'EA',
                        },
                        {
                            key: '1-7',
                            label: 'Industry',
                        },
                        {
                            key: '1-8',
                            label: 'Market',
                        },
                    ],
                },
            ]}
        />
    );
    const menu2 = (
        <Menu
            items={[
                {
                    key: '1',
                    type: 'group',
                    children: [
                        {
                            key: '1-1',
                            label: 'Latest exposure',
                        },
                        {
                            key: '1-2',
                            label: 'Rights Protection Center',
                        },

                    ],
                },
            ]}
        />
    );

    const menu3 = (
        <Menu
            items={[
                {
                    key: '1',
                    type: 'group',
                    children: [
                        {
                            key: '1-1',
                            label: 'Latest',
                        },
                        {
                            key: '1-2',
                            label: 'Original',
                        },
                        {
                            key: '1-3',
                            label: 'Industry',
                        },

                    ],
                },
            ]}
        />
    );

    return (
        <Row className='sticky-inner'  style={{ background: '#ffbf00', display: 'flex', justifyContent: 'center',alignItems: "center",width:"100%"}}>
            <Col lg={1}>
            <a href='/'>  <p>Home</p></a>
                
            
            </Col>
            <Col lg={1}>
            <a href='/'><p>About</p></a>
                
            
            </Col>
            <Col lg={1}>
            <a href='/'>
            <p>
                    <Dropdown overlay={menu}>

                        <Space>
                        Exhibitors
                            <DownOutlined />
                        </Space>

                    </Dropdown>


                </p>
                </a>
            
            </Col>

            <Col lg={1}>
            <p>
                    <Dropdown overlay={menu1}>

                        <Space>
                            Visit
                            <DownOutlined />
                        </Space>

                    </Dropdown>


                </p>
                
            
            </Col>
            <Col lg={1}>
                <p>
                    <Dropdown overlay={menu2}>

                        <Space>
                        Exhibit
                            <DownOutlined />
                        </Space>

                    </Dropdown>

                </p>
            
            </Col>
            <Col lg={2}>
            <p>
                    <Dropdown overlay={menu3}>

                        <Space>
                        Contact Us
                            <DownOutlined />
                        </Space>

                    </Dropdown>

                </p>
                
            
            </Col>

            
             
             
             
                
         
            </Row>
        
    );
}

export default Navcontant;