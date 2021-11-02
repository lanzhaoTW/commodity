import React, {useEffect, useState} from 'react';
import './index.css';

import CommodityItem from "./components/CommodityItem";
import {getAllCommodities} from "../../service/commodityService";
import Loading from "../../components/loading";

export interface CommodityItemProps {

    id: number;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
}

function Commodity() {
    const [commodities, setCommodities] = useState<CommodityItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true)
        getAllCommodities().then(res => {
            if (res.status === 200) {
                setCommodities(res.data)
            }
        }).finally(() => {
            setLoading(false)
        })

    }, [])

    return (
        <>
            <Loading show={loading}/>
            <div className="container">
                {
                    commodities.map((item) => <CommodityItem item={item} key={item.id}/>)
                }
            </div>
        </>

    );
}

export default Commodity;
