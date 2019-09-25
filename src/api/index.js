import axios from "axios"
import QS from "qs"
//公告请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 10000;

//首页post请求
export function homepost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(`http://47.102.206.91:8201/y${url}`, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    })
}
//首页get请求
export function homeget(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(`http://101.132.180.235:8001/category/y${url}`, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    })
}