import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import style from "./index.less";
import {CommodityResponse, getCommodityDetail} from "../../service/commodityService";
import Loading from "../../components/loading";
import useRequest from "../../hooks/useRequest";
import {CommonResponse} from "../../service/http";
import { Link } from 'react-router-dom';



function CommodityDetail() {
    const params = useParams<{ id: string }>();

    const getDetail = (): Promise<CommonResponse<CommodityResponse>> => {
        return getCommodityDetail(params.id)
    }

   const {loading, data: detail, execute} =  useRequest( getDetail)

    useEffect(() => {
        execute()
    }, [params.id])

    return (
        <>
            <Loading show={loading}/>
            {detail && (<div className={style["container"]}>
                <Link to={'/'} className={style["nav"]}>回到上一页</Link>
                <img src={detail.imageUrl} alt={detail.name} className={style["image-content"]}/>
                <div className={style["commodity-content"]}>
                    <div className={style["name"]}>
                        {detail.name} (
                        <span className={style["description"]}>{detail.description}</span>
                        )
                    </div>
                    <div className={style["price"]}>¥{detail.price}</div>

                </div>

            </div>)}
        </>)

}


export default CommodityDetail
