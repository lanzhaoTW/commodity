import React, {useEffect} from 'react';
import style from './index.less';

import CommodityItem from "./components/CommodityItem";
import {getAllCommodities, CommodityResponse} from "../../service/commodityService";
import Loading from "../../components/loading";
import {CommonResponse} from "../../service/http";
import useRequest from "../../hooks/useRequest";

function Commodity() {
    const getDetail = (): Promise<CommonResponse<CommodityResponse[]>> => {
        return getAllCommodities()
    }

    const {loading, data: commodities = [], execute} =  useRequest( getDetail)

    useEffect(() => {
        execute()
    }, [])


    return (
        <>
            <Loading show={loading}/>
            <div className={style["container"]}>
                {
                    commodities.map((item: CommodityResponse) => <CommodityItem item={item} key={item.id}/>)
                }
            </div>
        </>

    );
}

export default Commodity;
