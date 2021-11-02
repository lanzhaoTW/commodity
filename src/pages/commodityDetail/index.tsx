import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {CommodityItemProps} from "../commodity";
import style from "./index.less";
import {getCommodityDetail} from "../../service/commodityService";
import Loading from "../../components/loading";


function CommodityDetail() {
    const params = useParams<{ id: string }>();
    const [detail, setDetail] = useState<CommodityItemProps>()
    const [loading, setLoading] = useState<boolean>(false);



    useEffect(() => {
        setLoading(true)
        getCommodityDetail(params.id).then(res => {
            if (res.status === 200) {
                setDetail(res.data)
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [params.id])


    return (
        <>
            <Loading show={loading}/>
            {detail && (<div className={style["container"]}>

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
