import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn',
    timeout: 5000
})

instance.interceptors.request.use(config=>{
    return config;
}, err=>{
    return err;
})

instance.interceptors.response.use(res=>{
    return res.data ? res.data:res;
}, err=>{
    return err;
})

export {instance}