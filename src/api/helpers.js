import axios from 'axios'

// const urlMap = {
//     development: '/',
//     production: 'http://ustbhuangyi.com/sell/'
//   }
//   const baseUrl = 'http://47.103.117.222:12388/'
 const ERR_OK = 0

export function get (url) {
    return function (params) {
        return axios.get(url, {
            params
        }).then((res) => {
            const { errno, data } = res.data
            if (errno === ERR_OK) {
                return data
            };
        }).catch(() => {
        })
    }
}
