import React from 'react';
import { Avatar, List } from 'antd';

const data = [
    {
        title: 'Forex brokers Ｘ Sports: Can crossover trigger public attention? Part 2',
    },
    {
        title: 'WikiFX’s New Function: A wallet that does not require transfer fees.',
    },
    {
        title: 'WikiFX Review: Kovie- More than 30 complaints within 3 months!',
    },
    {
        title: '10 Unregulated Forex Brokers Have Been Added To UK FCA Warning List.',
    },
    {
        title: 'Renault Alpine Declines FVP Trade: "We No Longer Have Any Relationship"..',
    },
    {
        title: 'WikiFX Brokers Review: Beware of Unregulated Forex Broker 70Trades..',
    },
    {
        title: 'ZuluTrade Is Named As The Official Global Partner At iFX EXPO ASIA 2022 In Bangkok"...',
    },
];

function Latestnews(props) {
    return (
        <div>
            <h1>Latest News</h1>
        
            <List
            title="Latest News"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://img.fx696.com/icon.png_fxeye-template-global" />}
                            
                            title={<a >{item.title}</a>}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Latestnews;