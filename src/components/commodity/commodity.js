import React from 'react'
import './commodity.less'
import reactImg from '@/static/react.png'
class Commodity extends React.Component{
    render(){
        return(
            <div className='commodity'>
                <div className='title'>精灵 Phantom</div>
                <div className='one'>
                    <img src={reactImg} alt="" className="shop_img"/>
                    <h3>DJI Ronin 4D-6K</h3>
                    <p>¥46888</p>
                </div>
                <div className='two'>
                    <div className='box_1 box'></div>
                    <div className='box_2 box'></div>
                </div>
                <div className='threen'>111111</div>
                <div className='four'></div>
            </div>
        )
    }
}
export default Commodity