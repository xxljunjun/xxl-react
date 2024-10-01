import React from "react";
import "./study-context.less";
import Son from './components/son/son'
import {XxxContext} from '@/utils/provider/index'

const StudyContext = (props)=>{
    return (
        <>
           
            StudyContext
            <XxxContext.Provider value={{xxlname:'xxl',age:12}}>
                <Son/>
            </XxxContext.Provider>
        </>
    )
}
export default StudyContext;