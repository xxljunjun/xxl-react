import React, { useState, useEffect } from "react";
import TopSearch from "@/components/search/search.js";
import TipsDialog from "@/components/tipsDialog/tipsDialog.js";
import { Link, useNavigate } from "react-router-dom";
import "./car.less";
import Mybottom from "@/components/mybottom/mybottom.js";
import { Modal, Checkbox } from "antd";
import Myloading from "@/components/loading/loading.js";
import { swiper_1 } from "@/utils/img.js";

// import { useNavigate} from "react-router-dom";

const Car = (props) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [shopArr, setShopArr] = useState([
    { id: 1, name: "小溪流" },
    { id: 2, name: "君君" },
  ]);
  let navigate = useNavigate();
  // const gotopage = ()=>{
  //   navigate('/')
  // }
  const openDialog = () => {
    console.log("打开弹窗");
    setVisible(true);
  };
  const onChange = () => {};
  const goToLogin = () => {
    navigate("/login");
  };
  const goToBuy = () => {
    navigate("/login");
  };
  /**
   * 关闭弹窗
   */
  const closetipsDialog = () => {
    setVisible(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {};
  }, []);
  return (
    <>
      <TipsDialog
        dialogStatus={visible}
        close={closetipsDialog}
        title={`物流配送通知`}
        text={`河北省张家口市于2021年11月25日至2022年3月20日，暂停收取无人机及关键零部件，如有上述地区用户在此期间购买以上产品，将于物流恢复正常后统一发货。 疫情期间受交通管制影响，收货地址为新疆维吾尔自治区；内蒙古兴安盟、鄂伦春自治旗、乌兰察布、呼伦贝尔市、阿拉善盟市部分网点，呼伦贝尔市莫旗、阿荣旗、扎兰屯市；黑龙江省鸡西市、鹤岗市、哈尔滨市、齐齐哈尔市、绥化市、黑河市、大兴安岭市部分网点，鹤岗市萝北县，双鸭山市饶河县；辽宁省大连市部分网点；山东省临沂市部分网点；河南省周口市、郑州市部分网点；甘肃省兰州市部分网点；河北省承德市、石家庄市部分网点；陕西省西安市；四川省凉山部分网点；浙江省舟山市、宁波市、绍兴市部分网点，宁波市镇海区，绍兴市上虞区；广东省东莞市大朗镇部分网点；云南省德宏市、景洪市、临沧市、瑞丽市部分网点；广西壮族自治区防城港市、崇左市部分网点暂停派件，根据区域政策可能更换其他物流公司进行派件，其余部分地区可能出现派送延迟。具体解除时间请以邮管局通知为准。给您造成的不便，敬请谅解。`}
      />
      {loading ? (
        <Myloading loading={loading} />
      ) : (
        <div className="car">
          <TopSearch />
          <div className="top_txt">
            <div className="txt">
              疫情期间受交通管制影响，部分地区可能出现派送延迟，给您造成的不便，敬请谅解。
            </div>
            <div className="godetail" onClick={openDialog}>
              查看详情
            </div>
          </div>
          <div className="mycar">
            <h3 className="title">我的购物车</h3>
            <p className="message_box">
              登录后将显示您之前加入的商品。
              <span className="login" onClick={goToLogin}>{`立即登录 >`}</span>
            </p>
            <p className="price_box">
              商品总金额(2):¥328
              <span className="btn" onClick={goToBuy}>
                去结算
              </span>
            </p>
          </div>
          {/* 商品信息 */}
          {shopArr.map((val) => {
            return (
              <div className="shop_box" key={val.id}>
                <Checkbox onChange={onChange} />
                <img src={swiper_1} alt="" className="shop_img" />
                <div className="shop_txt">
                  <p>Osmo Pocket 磁吸 ND 减光镜套件</p>
                  <p>¥299</p>
                  <div className="updown">
                    <span className="remove">移除</span>
                    <div className="jishu">
                      <span className="reduce">-</span>
                      <span className="num">2</span>
                      <span className="add">+</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="computed">
            <p>
              商品总金额(2)<span className="price">¥328</span>
            </p>
            <p className="border_p">
              邮费<span>免费</span>
            </p>
            <div className="tocom">
              <div className="tocom_btn" onClick={goToBuy}>
                去结算
              </div>
            </div>
          </div>
          <div className="txt_box">
            <p>支持支付宝、微信、银联、银行转账、花呗、京东白条和招行分期</p>
            <p>购买即可获得价值支付金额1%的DJI币返利 - 购买越多，返利越多。</p>
            <p className="border_p">
              您可以在结账的时候使用优惠券或者 DJI 币抵扣。
            </p>
            <div className="help">
              <div>需要帮助？</div>
            </div>
          </div>
          <Mybottom />
        </div>
      )}
    </>
  );
};
export default Car;
