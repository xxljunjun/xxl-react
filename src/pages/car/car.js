import React, { useState,useEffect} from 'react';
import TopSearch from "@/components/search/search.js";
import "./car.less";
import Mybottom from '@/components/mybottom/mybottom.js'
import { Modal } from 'antd';
import Myloading from '@/components/loading/loading.js'


// import { useNavigate} from "react-router-dom";

const Car = props=>{
  const [visible, setVisible] = useState(false);
  const [loading,setLoading] = useState(true)
  // let navigate = useNavigate();
  // const gotopage = ()=>{
  //   navigate('/')
  // }
  const openDialog = ()=>{
    console.log("打开弹窗")
    setVisible(true)
  }
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 500);
    return ()=>{

    }
  },[])
  return(
    <>
      <Modal
        title="物流配送通知"
        centered
        maskClosable={false}
        visible={visible}
        onOk={() => setVisible(false)}
      ></Modal>
      {
      loading?<Myloading loading={loading}/>:
      <div>
        <TopSearch/>
        <div className="top_txt">
          <div className="txt">疫情期间受交通管制影响，部分地区可能出现派送延迟，给您造成的不便，敬请谅解。</div>
          <div className="godetail" onClick={openDialog}>查看详情</div>
        </div>
        <Mybottom/>
      </div>
      }
      
    </>
  )
}
export default Car;
