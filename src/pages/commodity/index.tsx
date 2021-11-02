import React, {useEffect, useState} from 'react';
import './index.css';

import CommodityItem from "./components/CommodityItem";
import {getAllCommodities} from "../../service/commodityService";
import Loading from "../../components/loading";
import {CommonResponse} from "../../service/http";
import useRequest from "../../hooks/useRequest";

export interface CommodityItemProps {

    id: number;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
}

function Commodity() {
    const getDetail = (): Promise<CommonResponse<CommodityItemProps[]>> => {
        return getAllCommodities()
    }

    const {loading, data: commodities = [], execute} =  useRequest( getDetail)

    useEffect(() => {
        execute()
    }, [])


    return (
        <>
            <Loading show={loading}/>
            <div className="container">
                {
                    commodities.map((item: CommodityItemProps) => <CommodityItem item={item} key={item.id}/>)
                }
            </div>
        </>

    );
}

export default Commodity;
