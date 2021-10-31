import React from 'react';
import style from './commodityItem.less';
import { CommodityItemProps } from "../index"
import { useHistory } from 'react-router-dom'

interface Props {
    item: CommodityItemProps
}

function CommodityItem({ item }: Props ) {
     const history = useHistory();

    const jumpToDetail = () => {
        history.push(`/commodity/${item.id}`)
    }
    return (
        <div className={style["commodity-item"]} onClick={jumpToDetail}>
            <img src={item.imageUrl} alt={item.name} className={style["image-content"]}/>
            <div className={style["commodity-content"]}>
                <div className={style["name"]}>{item.name}</div>
                <div className={style["description"]}>{item.description}</div>
                <div className={style["price"]}>¥{item.price}</div>
            </div>
        </div>
    );
}

export default CommodityItem;
