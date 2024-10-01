import React from "react";
import {XxxContext} from '@/utils/provider/index'
const Other = (props)=>{
    
    return (
        <>
        other
        <XxxContext.Consumer>
            {
                value=>{
                    return <li>{value.xxlname}</li>
                }
            }
        </XxxContext.Consumer>
        </>
    )
}
export default Other;