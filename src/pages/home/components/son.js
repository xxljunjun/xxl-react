import React from 'react'
import './son.css'
class Son extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sonName:'我是son组件'
        }
    }
    change(){
        let {onChangeColor} = this.props
        console.log('需要调用父组件的方法')
        onChangeColor()
    }
    render(){
        let {sonName} = this.state
        // let {myName} = this.props
        // console.log("props",this.props.children) 类似于vue中的插槽的作用
        return(
            <div className='son' onClick={()=>this.change()}>
                {sonName}
            </div>
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
export default Son