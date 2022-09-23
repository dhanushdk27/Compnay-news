import React from 'react';
import { Row, Col } from 'reactstrap';
import { Card } from 'antd';

const companyname = {

    "MOGAFX": "https://eimgjys.fx696.com/ico/637268901762595054/FXT637268901762595054_436951.png_wiki-template-global",
    "SHANGQUAN": "https://eimgjys.fx696.com/ico/2031924375/FXT2031924375_321830.png_wiki-template-global",
    "FIRMA": "https://eimgjys.fx696.com/ico/637508235708024400/FXT637508235708024400_806056.png_wiki-template-global",
    "winterSnowForex": "https://eimgjys.fx696.com/ico/1015438220/FXT1015438220_324273.png_wiki-template-global",
    "SHANGQUAN": "https://eimgjys.fx696.com/ico/2618539666/FXT2618539666_320362.png_wiki-template-global",
    "LunoTrade": "https://eimgjys.fx696.com/ico/637560103027568413/FXT637560103027568413_339598.png_wiki-template-global",
    "PocketOption": "https://eimgjys.fx696.com/ico/1349687131/FXT1349687131_783712.png_wiki-template-global",
    "HeliusCapital": "https://eimgjys.fx696.com/ico/0001423088/FXT_0001423088_100x100_77574.png_wiki-template-global",
    "LunoTrade": "https://eimgjys.fx696.com/ico/0001554333/FXT0001554333_873091.png_wiki-template-global"
};

const fulldata = [

    {
        'name': 'MOGAFX',
        'companeyname': 'MOGAFX',
        'content':'large fee was requested in order to withdraw. They promise to return all of my money and send mail to cover the withdrawal expenses. ',
        'title':'R2500 deposited via Luno',
        'date':'2022-09-10 16:39'
    },
    {
        'name': 'SHANGQUAN',
        'companeyname': 'SHANGQUAN',
        'content':'First, they different excuses about missing documents in order not to pay investors. many failed attempts just to withdraw made me brutally hate SHANGQUAN,  NO CONTACT NUMBER! Stay away from this them it’s all manipulation please invest your money in something else ',
        'title':'so stressful  ',
        'date':'2022-09-10 16:39'
    },

    {
        'name': 'FIRMA',
        'companeyname': 'FIRMA',
        'content':'believe this company at your own risk, I had a terrible experience with them, unable to withdraw my profits and initial deposit till my name here intervened. ',
        'title':'Unable withdraw  ',
        'date':'2022-09-10 16:39'
    },
    {
        'name': 'winterSnowForex',
        'companeyname': 'winter Snow Forex',
        'content':'It is a crying shame that companies like Wintersnow can operate and continue to sweet talk people out of their money. They kept asking me for more money even after i was supposed to withdraw so i kept an evidence of the rejected wintersnow withdrawal below as well as the successful withdrawal option i opted for. On the grounds of this, i want aspiring investors to learn from me and cut all ties with wintersnow forex as they are certain to fail you',
        'title':'Wrong choice of investment ',
        'date':'2022-09-10 16:39'
    },
    {
        'name': 'SHANGQUAN',
        'companeyname': 'SHANGQUAN',
        'content':'First, they different excuses about missing documents in order not to pay investors. many failed attempts just to withdraw made me brutally hate SHANGQUAN,  NO CONTACT NUMBER! Stay away from this them it’s all manipulation please invest your money in something else ',
        'title':'Wrong choice of investment ',
        'date':'2022-09-10 16:39'
    },
    {
        'name': 'LunoTrade',
        'companeyname': 'LunoTrade',
        'content':'i try to trades with someone call her self Mary Thato and the other one is Andries Antonopoulos i deposit R5000 in my luno app she send to her adress on online trading after she told me to upgrade with R25500 i deposited than after she told me to deposit 10% for company before i received my profits i deposited after few days she told me i must pay for IMF CODE i refuse to pay now is busy massage me about payment of IMF Code all the money i deposited to her is R86500 ',
        'title':'Dont trust anymore all are scammers',
        'date':'2022-09-10 16:39'
    },
    {
        'name': 'PocketOption',
        'companeyname': 'Pocket Option',
        'content':'I came third in the tournament, but I was not allowed to withdraw money. After a while, I could no longer participate in the next competition. No matter how much I asked the support, they gave ridiculous answers, and in the end my account was deleted. Unfortunately, this broker is a fraud, do not invest your money here.',
        'title':'unable to withdraw',
        'date':'2022-09-10 16:39'
    },
    {
        'name': 'HeliusCapital',
        'companeyname': 'Helius Capital',
        'content':'My account was sitting conveniently over 70,000 only for it to be reduced to $5,000 and yet they called me over again convincing me to add more money. Later on i requested for withdrawal but it was cancelled by someone in Helius capital with proof below i filed a complaint and withdrawal access restored This broker is a liar and do not deserve any form of rating',
        'title':'I have no kind words for this broker',
        'date':'2022-09-10 16:39'
    },
    {
        'name': 'LunoTrade',
        'companeyname': 'LunoTrade',
        'content':'First, they different excuses about missing documents in order not to pay investors. many failed attempts just to withdraw made me brutally hate SHANGQUAN,  NO CONTACT NUMBER! Stay away from this them it’s all manipulation please invest your money in something else ',
        'title':'Wrong choice of investment ',
        'date':'2022-09-10 16:39'
    },


]

function Scroll(props) {
    return (
        <Row style={{display:"flex",justifyContent: 'space-around',width:"100%",  height: 'fit-content',padding:'1rem',gap: "20px"}}>
   
                {fulldata.map(data=>(
                <Card id='hover'
                   cover={<img style={{ height: "1rem", width: "1rem" ,marginTop:'-2.3rem',marginLeft:"0.3rem"}} alt="example" src={companyname[data.name]}/>}
                    bordered={false}
                    style={{ width: 350 ,height:'fit-content',boxShadow: '0 8px 8px 4px lightblue', borderRadius:"8px"}}
                    title={data.companeyname} >
                  
                    <h5 style={{color:'#000'}}>{data.title}</h5>
                    <p style={{color:'#a3a3a3'}}>{data.content}</p>
                    <h6 style={{color:'#a3a3a3'}}>{data.date}</h6>
                </Card>
                
                ))}
        </Row>
    );
}

export default Scroll;