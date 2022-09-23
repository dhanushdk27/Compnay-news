import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import { DollarCircleFilled, FundFilled, MoneyCollectFilled,ShoppingFilled } from '@ant-design/icons';
import './Company.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';






const companyname = {

    "RakutenSecuritiesAustralia": "https://moneyexpoindia.com//storage/155/62b9395ea116d_diamona-sponsor.png",
    "XM": "https://moneyexpoindia.com//storage/141/62a877316232b_04-_-Qfx.jpg",
    "ICMarket": "https://moneyexpoindia.com//storage/181/62d529841a529_b2broker.jpg",
    "GOMarket": "https://moneyexpoindia.com//storage/193/62da4766a5f33_27.jpg",
    "ICMarkets": "https://moneyexpoindia.com//storage/197/62dfb3ea9ee7c_30.jpg",
    "GOMarkets": "https://moneyexpoindia.com//storage/175/62d13e02651ae_05.png"

};
const companyname1 = {

    "RakutenSecuritiesAustralia": "https://moneyexpoindia.com//storage/165/62c539eb639b9_match-trade.png",
    "XM": "https://moneyexpoindia.com//storage/198/62dfc1dd584d8_31.jpg",
    "ICMarket": "https://moneyexpoindia.com//storage/214/62e37026792e7_Osiz.png",
    "GOMarket": "https://moneyexpoindia.com//storage/221/62e76a9e79ed9_44.jpg",
    "ICMarkets": "https://moneyexpoindia.com//storage/227/62e9117fc3590_48.jpg",
    "GOMarkets": "https://moneyexpoindia.com//storage/175/62d13e02651ae_05.png"

};
const companyname2 = {

    "RakutenSecuritiesAustralia": "https://moneyexpoindia.com//storage/178/62d4ec42864ab_19.jpg",
    "XM": "https://moneyexpoindia.com//storage/189/62d78a9e3585a_24.jpg",
    "ICMarket": "https://moneyexpoindia.com//storage/190/62d90866d0561_06.png",
    "GOMarket": "https://moneyexpoindia.com//storage/191/62da2aaab0817_FGTC.png",
    "ICMarkets": "https://moneyexpoindia.com//storage/194/62da4ef16d3e4_28.jpg",
    "GOMarkets": "https://moneyexpoindia.com//storage/175/62d13e02651ae_05.png"

};
const companyname3 = {

    "RakutenSecuritiesAustralia": "https://moneyexpoindia.com//storage/162/62c2d204b5386_13.jpg",
    "XM": "https://moneyexpoindia.com//storage/166/62c573b49ee0e_16.jpg",
    "ICMarket": "https://moneyexpoindia.com//storage/177/62d158a619992_18.jpg",
    "GOMarket": "https://moneyexpoindia.com//storage/205/62e21c35901b2_37.jpg",
    "ICMarkets": "https://moneyexpoindia.com//storage/240/62eb90a1b65d7_54.jpg",
    "GOMarkets": "https://moneyexpoindia.com//storage/213/62e270bf890ab_40.jpg"

};

const fulldata = [

    {
        'name': 'RakutenSecuritiesAustralia',
        'companeyname': 'Rakuten Securities Australia'
    },
    {
        'name': 'XM',
        'companeyname': 'XM'
    },
    {
        'name': 'ICMarket',
        'companeyname': 'ICMarkets'
    },
    {
        'name': 'GOMarket',
        'companeyname': 'GOMarkets'
    },
    {
        'name': 'ICMarkets',
        'companeyname': 'ICMarkets'
    },
    {
        'name': 'GOMarkets',
        'companeyname': 'GOMarkets'
    },


]
const fulldata1 = [

    {
        'name': 'RakutenSecuritiesAustralia',
        'companeyname': 'Rakuten Securities Australia'
    },
    {
        'name': 'XM',
        'companeyname': 'XM'
    },
    {
        'name': 'ICMarket',
        'companeyname': 'ICMarkets'
    },
    {
        'name': 'GOMarket',
        'companeyname': 'GOMarkets'
    },
    {
        'name': 'ICMarkets',
        'companeyname': 'ICMarkets'
    },
    {
        'name': 'GOMarkets',
        'companeyname': 'GOMarkets'
    },


]
const fulldata2 = [

    {
        'name': 'RakutenSecuritiesAustralia',
        'companeyname': 'Rakuten Securities Australia'
    },
    {
        'name': 'XM',
        'companeyname': 'XM'
    },
    {
        'name': 'ICMarket',
        'companeyname': 'ICMarkets'
    },
    {
        'name': 'GOMarket',
        'companeyname': 'GOMarkets'
    },
    {
        'name': 'ICMarkets',
        'companeyname': 'ICMarkets'
    },
    {
        'name': 'GOMarkets',
        'companeyname': 'GOMarkets'
    },


]
const fulldata3 = [

    {
        'name': 'RakutenSecuritiesAustralia',
        'companeyname': 'Rakuten Securities Australia'
    },
    {
        'name': 'XM',
        'companeyname': 'XM'
    },
    {
        'name': 'ICMarket',
        'companeyname': 'ICMarkets'
    },
    {
        'name': 'GOMarket',
        'companeyname': 'GOMarkets'
    },
    {
        'name': 'ICMarkets',
        'companeyname': 'ICMarkets'
    },
    {
        'name': 'GOMarkets',
        'companeyname': 'GOMarkets'
    },


]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Company(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Box sx={{ width: '70%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabPanel value={value} index={0}>
                    <h6 style={{ color: "#000", fontSize: "19px", alignItems: 'baseline' }}><DollarCircleFilled /></h6>  <h4 style={{ color: "#000", fontWeight: "700", alignItems: 'baseline' }}>Rankings</h4>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h6 style={{ color: "#000", fontSize: "19px", alignItems: 'baseline' }}><FundFilled /></h6>  <h4 style={{ color: "#000", fontWeight: "700", alignItems: 'baseline' }}>Popularity Ranking</h4>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <h6 style={{ color: "#000", fontSize: "19px", alignItems: 'baseline' }}><MoneyCollectFilled /></h6>  <h4 style={{ color: "#000", fontWeight: "700", alignItems: 'baseline' }}>Frauds</h4>

                </TabPanel>
                <TabPanel value={value} index={3}>
                    <h6 style={{ color: "#000", fontSize: "19px", alignItems: 'baseline' }}><MoneyCollectFilled /></h6>  <h4 style={{ color: "#000", fontWeight: "700", alignItems: 'baseline' }}>Brand Ranking</h4>

                </TabPanel>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    
                    <Tab icon={<DollarCircleFilled />} {...a11yProps(0)} />
                    <Tab icon={<FundFilled />} {...a11yProps(1)} />
                    <Tab icon={<MoneyCollectFilled />} {...a11yProps(2)} />
                    <Tab icon={<ShoppingFilled />} {...a11yProps(3)} />
            
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <List style={{ height: "fit-contant" }} sx={{ width: '100%', maxWidth: 400, maxHeight: 900, }}>
                    {fulldata.map((k) => (
                        <Divider style={{ height: "30px" }} variant="inset" component="li" />,
                        <ListItem alignItems="flex-start" style={{width:"100%",borderRadius:"1rem" ,boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px",border: '1px solid #F4008C'}}>
                            <ListItemAvatar>
                                <a href='/Alldetails'>
                                    <img src={companyname[k.name]} style={{ height: "75px",width:"100%",borderRadius:"1rem" ,boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px"}} />
                                </a>
                            </ListItemAvatar>
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <p>{k.companeyname}</p>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                        </Stack>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <List style={{ height: "fit-contant" }} sx={{ width: '100%', maxWidth: 400, maxHeight: 900, }}>
                    {fulldata1.map((k) => (
                        <Divider style={{ height: "30px" }} variant="inset" component="li" />,
                        <ListItem alignItems="flex-start" style={{width:"100%",borderRadius:"1rem" ,boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px",border: '1px solid #000'}}>
                            <ListItemAvatar>
                                <a href='/Alldetails'>
                                    <img src={companyname1[k.name]} style={{ height: "75px",width:"100%",borderRadius:"1rem" ,boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px"}} />
                                </a>
                            </ListItemAvatar>
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <p>{k.companeyname}</p>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                        </Stack>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <List style={{ height: "fit-contant" }} sx={{ width: '100%', maxWidth: 400, maxHeight: 900, }}>
                    {fulldata2.map((k) => (
                        <Divider style={{ height: "30px" }} variant="inset" component="li" />,
                        <ListItem alignItems="flex-start" style={{width:"100%",borderRadius:"1rem" ,boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px",border: '1px solid #F4008C'}}>
                            <ListItemAvatar>
                                <a href='/Alldetails'>
                                    <img src={companyname2[k.name]} style={{ height: "75px",width:"100%",borderRadius:"1rem" ,boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px"}} />
                                </a>
                            </ListItemAvatar>
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <p>{k.companeyname}</p>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                        </Stack>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <List style={{ height: "fit-contant" }} sx={{ width: '100%', maxWidth: 400, maxHeight: 900, }}>
                    {fulldata3.map((k) => (
                        <Divider style={{ height: "30px" }} variant="inset" component="li" />,
                        <ListItem alignItems="flex-start"  style={{width:"100%",borderRadius:"1rem" ,boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px",border: '1px solid #000'}}>
                            <ListItemAvatar>
                                <a href='/Alldetails'>
                                    <img src={companyname3[k.name]} style={{ height: "75px",width:"100%",borderRadius:"1rem" ,boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px"}}/>
                                </a>
                            </ListItemAvatar>
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <p>{k.companeyname}</p>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                        </Stack>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </TabPanel>
        </Box>



    );
}
export default Company;
