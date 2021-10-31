import React, {useEffect, useState} from 'react';
import './index.css';

import CommodityItem from "./components/CommodityItem";

export interface CommodityItemProps {

    id: number;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
}

function Commodity() {
    const [commodities, setCommodities] = useState<CommodityItemProps[]>([]);

    useEffect(() => {
        const commodities = [
            {
                id: 1,
                imageUrl: "/images/coffee.jpeg",
                name: '咖啡',
                description: "大杯/冰",
                price: 25,
            },
            {
                id: 2,
                imageUrl: "/images/cola.jpeg",
                name: '可乐',
                description: "中杯/冰",

                price: 2.5,
            },
            {
                id: 3,
                imageUrl: "/images/cake1.jpeg",
                name: '提拉米苏',
                description: "巧克力/水果",
                price: 120,
            },
            {
                id: 4,
                imageUrl: "/images/cake2.jpeg",
                name: '抹茶慕斯',
                description: "抹茶/水果",
                price: 120,
            },

        ]
        setCommodities(commodities)

    }, [])

    return (
        <div className="container">
            {
                commodities.map((item) => <CommodityItem item={item} key={item.id}/>)
            }
        </div>
    );
}

export default Commodity;