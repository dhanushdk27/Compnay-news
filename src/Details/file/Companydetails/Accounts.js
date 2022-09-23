import React from 'react';

import { Row, Col } from 'reactstrap';
import { Card } from 'antd';


const companyname = {

    "MOGAFX": "https://eimgjys.fx696.com/ico/637268901762595054/FXT637268901762595054_436951.png_wiki-template-global",
};

const fulldata = [

    {
        'name': 'MOGAFX',
        'companeyname': 'Broker closes accounts without warning',
        'content':'HYCMhas locked my account without deducting all my money. dont pay me. broker is scam.',
        'date':'2022-09-10 16:39'
    },
    {
        'name': 'MOGAFX',
        'companeyname': 'Withdrawal problem',
        'content':'The withdrawal has been delayed for 3 weeks. The customer service treated mt in a frivolous way, keeping holding off.',
        'date':'2022-09-10 16:39'
    },

    {
        'name': 'MOGAFX',
        'companeyname': 'unable to withdraw my money',
        'content':'unable to withdraw my money from last year up until now they say I must pay another money before I can get my profit ',
        'date':'2022-09-10 16:39'
    },
    {
        'name': 'MOGAFX',
        'companeyname': 'Careful',
        'content':'Never ever join Say got strong signal group End up all stop lost signal Maybe is their way to cheat investor money Join a month lose till 260 usd still got 30 usd charge for withdraw',
        'date':'2022-09-10 16:39'
    },
    {
        'name': 'MOGAFX',
        'companeyname': 'withdraw problam',
        'content':'this is very bad brokar plz dont us this app my accounts is full verifyd butt not received withdraw bad scame brokar',
        'date':'2022-09-10 16:39'
    },
    {
        'name': 'MOGAFX',
        'companeyname': 'HYCM restricted accounts suddenly, making me lose over $120,000',
        'content':'On the morning of 12.8, 2020, I suddenly discovered that I can only close the position, cannot deposit money, withdraw money, or buy.',
        'date':'2022-09-10 16:39'
    },

]

function Accounts(props) {
    return (
        <Row style={{display:"flex",justifyContent: 'space-around',width:"100%",  height: 'fit-content',padding:'1rem',gap: "10px"}}>
        {fulldata.map(data=>(
        <Card id='hover'
           cover={<img style={{ height: "1rem", width: "1rem" ,marginTop:'-2.3rem',marginLeft:"0.3rem"}} alt="example" src={companyname[data.name]}/>}
            bordered={false}
            style={{ width: 350 ,height:'fit-content',boxShadow: '0 8px 8px 4px lightblue', borderRadius:"8px"}}
            title={data.companeyname} >
          
            <p style={{color:'#a3a3a3'}}>{data.content}</p>
            <h6 style={{color:'#a3a3a3'}}>{data.date}</h6>
        </Card>
        
        ))}
</Row>
    );
}

export default Accounts;