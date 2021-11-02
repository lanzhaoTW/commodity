import React from 'react'
import style from "./index.less"
interface Props {
    show: boolean;
    wording?: string;
}

const Loading = ( { show=false, wording="加载中..." }: Props) => {
    if (show) {
       return (
           <div className={style["loading-container"]}>
               <div className={style["loading-content"]}>
                   {wording}
               </div>
           </div>
       )
    }

    return (<></>)
}

export default Loading
