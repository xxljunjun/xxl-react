import axios from 'axios'

const instance = axios.create({
    // baseURL: 'https://way.jd.com',
    timeout: 7000,
    headers: {}
});

//请求拦截
instance.interceptors.request.use(function (config) {
    //加token
    console.log("请求拦截response",config)
    return config;
}, function (error) {
    return Promise.reject(error);
})

//请求响应
instance.interceptors.response.use(function (response) {
    //数据过滤
    console.log("请求响应response",response)
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default instance