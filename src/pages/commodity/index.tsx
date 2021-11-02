import React, {useEffect, useState} from 'react';
import './index.css';

import CommodityItem from "./components/CommodityItem";
import {getAllCommodities} from "../../service/commodityService";

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
        getAllCommodities().then(res => {
            if (res.status === 200) {
                setCommodities(res.data)
            }
        })

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
