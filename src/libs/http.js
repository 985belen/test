import axios from 'axios';
import Cookies from 'js-cookie';
import util from '@/libs/util';
import _API from '@/libs/config'
import Promise from 'promise-polyfill';
import Vue from 'vue' 
import {router} from '../router/index'
var httpVue=new Vue()
// To add to window
// if (!window.Promise) {
  window.Promise = Promise;
// }
axios.defaults.timeout = 300000;
axios.defaults.baseURL = '';
var flag = 0
// http request 拦截器
axios.interceptors.request.use(config => {
    if(config.url == _API.API_TOKEN || config.url == _API.API_LOGIN|| config.url == _API.API_FORGET_PAEEWORD|| config.url == _API.API_FORGET_PAEEWORD2|| config.url == _API.API_FORGET_PAEEWORDOK|| config.url == _API.API_LOGOUT){
        config.headers = {
            'Content-Type': 'application/json'
        };
        // console.log('登陆接口')
    }else{
        let token = sessionStorage.getItem('cookieaccess_token');
        // console.log('token',token)
        if (token) {
            config.headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            };
        }
    }
    // debugger
    config.url = config.url+'?random='+new Date().getTime()
    config.data = JSON.stringify(config.data);
    return config;
},
error => {
    // console.log(response.data)
    return Promise.reject(err);
}
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.errCode == 2) {
            router.push({
                path: '/login',
                querry: {redirect: router.currentRoute.fullPath}// 从哪个页面跳转
            });
        }
        return response;
    },
    error => {
            if(error.response.status == 401){
                flag++
                if(flag == 1){
                    httpVue.$Message.error({
                        content: '权限过期,3s跳转登录页面',
                        duration: 3,
                    })
                    setTimeout(()=>{
                        httpVue.bus.$emit('disconnect');  
                        sessionStorage.setItem('user','');
                        router.push({
                            path: '/login',
                        });
                        flag = 0
                    },3000)  
                }     
            }else if(error.response.status == 403){
                httpVue.$Message.error({
                    content: '资源不可用',
                    duration: 5,
                })
            }else if(error.response.status == 404){
                httpVue.$Message.error({
                    content: '请求的页面不存在或已被删除',
                    duration: 5,
                })
            }else if(error.response.status == 400){
                httpVue.$Message.error({
                    content: 'SQL注入',
                    duration: 5,
                })
            }else{
                httpVue.$Message.error({
                    content: '系统内部错误，请稍后重试',
                    duration: 5,
                })
            }
        }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch (url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            });
    });
}

// /**
//  * 封装delete请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// export function deleted (url, data = {}) {
//     return new Promise((resolve, reject) => {
//         axios.delete(url, data)
//             .then(response => {
//                 resolve(response.data);
//             }, err => {
//                 reject(err);
//             });
//     });
// }

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            });
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            });
    });
}
