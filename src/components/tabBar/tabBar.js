import React from 'react'
import './tabBar.css'
class TabBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            xxlname:'我是tabBar'
        }
    }
    render(){
        let {xxlname} = this.state
        return(
            <div className='tabBar'>{xxlname}</div>
        )
    }
    componentDidMount(){
        //dom加载完成
        //相当于vue的mounted
        console.log("------------,componentDidMount")
    }
    // sholdComponentUpdate(){
    //     console.log("------------,sholdComponentUpdate")
    //     console.log(this.state)
    //     return true
        
    // }
    // componentDidUpdate(){
    //     console.log("------------,componentDidUpdate")
    //     //调接口，更新完成
    // }
    componentWillUnmount(){
        console.log("------------,componentWillUnmount")
        //相当于vue的beforeDestroy
    }
}
export default TabBar