import React, { useState } from 'react';
import { Card } from 'antd';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import './News.css';


const tabListNoTitle = [
    {
        key: 'Latest',
        tab: 'Latest',
    },
    {
        key: 'Original',
        tab: 'Original',
    },
    {
        key: 'Industry',
        tab: 'Industry',
    },
    {
        key: 'Exposure',
        tab: 'Exposure',
    },
    {
        key: 'Brokers',
        tab: 'Brokers',
    },

];

const index1 = () => {

    return (
        <div>
            <div className='text'>
                <img src='https://wzimg.fx696.com/guoji/2022-09-13/637986754975825304/ART637986754975825304_679398.png-article_list' style={{ height: "150px" }} />
                <b><p>This FX Brokers Threatens Clients to Pay Funds in 3 Days Or Else...</p></b>
            </div>
            <Divider style={{ height: "30px" }} variant="inset" component="li" />
            <br></br>
            <div className='text'>
                <img src='https://wzimg.fx696.com/guoji/2022-09-13/637986603293522097/ART637986603293522097_230952.jpg-article_list' style={{ height: "150px" }} />
                <b><p>This FX Brokers Threatens Clients to Pay Funds in 3 Days Or Else...</p></b>
            </div>
            <Divider style={{ height: "30px" }} variant="inset" component="li" />
            <br></br>
            <div className='text'>
                <img src='https://wzimg.fx696.com/guoji/2022-09-13/637986643106902328/ART637986643106902328_846070.png-article_list' style={{ height: "150px" }} />
                <b><p>This FX Brokers Threatens Clients to Pay Funds in 3 Days Or Else...</p></b>
            </div>
            <Divider style={{ height: "30px" }} variant="inset" component="li" />
            <br></br>
            <div className='text'>
                <img src='https://wzimg.fx696.com/guoji/2022-09-13/637986633630005493/ART637986633630005493_827721.jpeg-article_list' style={{ height: "150px" }} />
                <b><p>This FX Brokers Threatens Clients to Pay Funds in 3 Days Or Else...</p></b>
            </div>
            <Divider style={{ height: "30px" }} variant="inset" component="li" />
        </div>
    )
}

const index2 = () => {

    return (
 <div>
            <div className='text'>
                <img src='https://wzimg.fx696.com/guoji/2022-09-13/637986754975825304/ART637986754975825304_679398.png-article_list' style={{ height: "150px" }} />
                <b><p>This FX Brokers Threatens Clients to Pay Funds in 3 Days Or Else...</p></b>
            </div>
            <Divider style={{ height: "30px" }} variant="inset" component="li" />
            <br></br>
            <div className='text'>
                <img src='https://wzimg.fx696.com/guoji/2022-09-13/637986603293522097/ART637986603293522097_230952.jpg-article_list' style={{ height: "150px" }} />
                <b><p>This FX Brokers Threatens Clients to Pay Funds in 3 Days Or Else...</p></b>
            </div>
            <Divider style={{ height: "30px" }} variant="inset" component="li" />
            <br></br>
            <div className='text'>
                <img src='https://wzimg.fx696.com/guoji/2022-09-13/637986643106902328/ART637986643106902328_846070.png-article_list' style={{ height: "150px" }} />
                <b><p>This FX Brokers Threatens Clients to Pay Funds in 3 Days Or Else...</p></b>
            </div>
            <Divider style={{ height: "30px" }} variant="inset" component="li" />
            <br></br>
            <div className='text'>
                <img src='https://wzimg.fx696.com/guoji/2022-09-13/637986633630005493/ART637986633630005493_827721.jpeg-article_list' style={{ height: "150px" }} />
                <b><p>This FX Brokers Threatens Clients to Pay Funds in 3 Days Or Else...</p></b>
            </div>
            <Divider style={{ height: "30px" }} variant="inset" component="li" />
        </div>
    )
}
const index3 = () => {

    return (
        <div>
        <div className='text'>
            <b><p> Euro Soars: Buoyed by Ukrainian Advance and the Mention of QT from the ECB</p></b> 
            <br></br>
        </div>
        <Divider style={{ height: "30px" }} variant="inset" component="li" />
        <br></br>
        <div className='text'>
            <b><p>Pound falls to lowest level against dollar since 1985</p></b>
        </div>
        <Divider style={{ height: "30px" }} variant="inset" component="li" />
        <br></br>
        <div className='text'>
            <b><p> Gas prices soar 26% after Russia keeps key pipeline closed</p></b>
        </div>
        <Divider style={{ height: "30px" }} variant="inset" component="li" />
        <br></br>
        <div className='text'>
            <b><p>Australia liquor store hiring with 10-minute interviews</p></b>
        </div>
        <Divider style={{ height: "30px" }} variant="inset" component="li" />
    </div>
    )
}
const index4 = () => {

    return (
        <div>
        <div className='text'>
            <img src='https://wzimg.fx696.com/fb_article/2022-09-13/637986536561486666/FB637986536561486666_384581.png-hy_list_listpic' style={{ height: "150px" }} />
            <b><p>
          Things You Must Know as a Beginner in Forex Trading Date: September 12th – September 16th
        </p></b>
        </div>
        <Divider style={{ height: "30px" }} variant="inset" component="li" />
        <br></br>
        <div className='text'>
            <img src='https://wzimg.fx696.com/fb_article/2022-09-11/637985348000392510/FB637985348000392510_538608.png-hy_list_listpic' style={{ height: "150px" }} />
            <b><p>
          Weekly News 2022/09/05-2022/09/09 Date: September 12th – September 16th
        </p></b>
        </div>
        <Divider style={{ height: "30px" }} variant="inset" component="li" />
        <br></br>
        <div className='text'>
            <img src='https://wzimg.fx696.com/fb_article/2022-09-12/637985960665111246/FB637985960665111246_346771.png-hy_list_listpic' style={{ height: "150px" }} />
            <b><p>
          Week Ahead – Market Volatility to Speed Up? Date: September 12th – September 16th
        </p></b>
        </div>
        <Divider style={{ height: "30px" }} variant="inset" component="li" />
        <br></br>
        <div className='text'>
            <img src='https://wzimg.fx696.com/fb_article/2022-09-13/637986262748205612/FB637986262748205612_749559.png-hy_list_listpic' style={{ height: "150px" }} />
            <b><p>
          Carry Trade Strategies and the Options of Currencies to Use Date: September 12th – September 16th
        </p></b>
        </div>
        <Divider style={{ height: "30px" }} variant="inset" component="li" />
    </div>
    )
}


const index5 = () => {

    return (
        <div>
        <div className='text'>
            <img src='https://h8imgs.fx696.com//app/2022/09/3328215404/20220912_239398.jpg-list' style={{ height: "150px" }} />
            <b><p><span style={{backgroundColor:"#e67373",color:"#fff",lineHeight: "20px", fontWeight: "400",fontSize: "12px"}}>UNABLE TO WITHDRAW</span>Unable to withdraw Let together expose them , tg me </p></b>
        </div>
        <Divider style={{ height: "30px" }} variant="inset" component="li" />
        <br></br>
        <div className='text'>
            <img src='https://h8imgs.fx696.com//app/2022/09/4744811082/20220912_887627.png-list' style={{ height: "150px" }} />
            <b><p><span style={{backgroundColor:"#e67373",color:"#fff",lineHeight: "20px", fontWeight: "400",fontSize: "12px"}}>UNABLE TO WITHDRAW</span>Unable to withdraw Let together expose them , tg me </p></b>
        </div>
        <Divider style={{ height: "30px" }} variant="inset" component="li" />
        <br></br>
        <div className='text'>
            <img src='https://h8imgs.fx696.com//app/2022/09/1682183155/20220911_705948.jpg-list' style={{ height: "150px" }} />
            <b><p><span style={{backgroundColor:"#e67373",color:"#fff",lineHeight: "20px", fontWeight: "400",fontSize: "12px"}}>OTHERS..............</span>Unable to withdraw Let together expose them , tg me </p></b>
        </div>
        <Divider style={{ height: "30px" }} variant="inset" component="li" />
        <br></br>
        <div className='text'>
            <img src='https://h8imgs.fx696.com//app/2022/09/1313875630/20220911_533092.jpeg-list' style={{ height: "150px" }} />
            <b><p><span style={{backgroundColor:"#e67373",color:"#fff",lineHeight: "20px", fontWeight: "400",fontSize: "12px"}}>UNABLE TO WITHDRAW</span>Unable to withdraw Let together expose them , tg me </p></b>
        </div>
        <Divider style={{ height: "30px" }} variant="inset" component="li" />
    </div>
    )
}

const contentListNoTitle = {

    'Latest': index1(),
    'Original': index2(),
    'Industry': index3(),
    'Exposure': index4(),
    'Brokers': index5(),

};


function News(props) {
    const [activeTabKey2, setActiveTabKey2] = useState('app');



    const onTab2Change = (key) => {
        setActiveTabKey2(key);
    };
    return (

        <Card
            style={{
                width: '100%',
                height: 'fit-content'
            }}
            tabList={tabListNoTitle}
            tabBarExtraContent={<a href="/Newsdetail">More</a>}
            onTabChange={(key) => {
                onTab2Change(key);
            }}
        >
            
            <ListItem alignItems="flex-start">
                <ListItemText
                    secondary={
                        <React.Fragment>

                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                style={{ display: 'flex', justifyContent: "start" }}
                            >

                                {contentListNoTitle[activeTabKey2]}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>

        </Card>

    );
}

export default News;