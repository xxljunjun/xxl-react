import React from 'react'
import './home.css'
import Son from './components/son.js'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            myName:'我是home组件'
        }
    }
    render(){
        let {myName} = this.state
        return(
            <div className='home'>
                {myName}
                <Son>
                    <div>
                        11111111111
                    </div>
                </Son>
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
export default Home