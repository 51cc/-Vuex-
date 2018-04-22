
import axios from 'axios'

import config from '../config/config'

import { Notification } from 'element-ui';


//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  //在请求发送之前做一些事
  return config;
},function(error){
  //当出现请求错误是做一些事
  return Promise.reject(error);
});

//添加一个返回拦截器
axios.interceptors.response.use(function(response){
  //对返回的数据进行一些处理
  return response;
},function(error){
  //对返回的错误进行一些处理
  return Promise.reject(error);
});

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.headers.common['DataType'] = 'json'


export  function post(url,param){

  console.log(config.baseUrl+url);
  console.log(JSON.stringify(param))

  return new Promise(function (resolve,reject) {

    axios.post(config.baseUrl+url, param)

      .then(function (response) {

        resolve(response);
        return response;
        // console.log(response);

      })
      .catch(function (error) {
        console.log('error');

        Notification({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          position: 'bottom-right',
        })
        reject(error);
        // console.log(error);
      });
  })



}


export  default {
  post
}


