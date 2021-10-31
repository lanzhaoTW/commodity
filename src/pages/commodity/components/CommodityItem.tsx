import React from 'react';
import './commodityItem.css';
import { CommodityItemProps } from "../index"

interface Props {
    item: CommodityItemProps
}

function CommodityItem({ item }: Props ) {
    return (
        <div className="commodity-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="commodity-content">
                <div className="name">{item.name}</div>
                <div className="price">{item.price}</div>
            </div>
        </div>
    );
}

export default CommodityItem;
