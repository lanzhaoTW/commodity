import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {CommodityItemProps} from "../commodity";
import style from "./index.less";


function CommodityDetail() {
    const params = useParams<{ id: string }>();
    const [detail, setDetail] = useState<CommodityItemProps>()

    useEffect(() => {
        console.log(params.id)
        setDetail({
            id: 1,
            imageUrl: "/images/coffee.jpeg",
            name: '咖啡',
            description: "大杯/冰",
            price: 25,
        })

    }, [params.id])


    return (
        <>
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
