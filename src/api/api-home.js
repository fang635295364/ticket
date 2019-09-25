import * as api from "./"

export default{Details:params=>{
    return api.homepost('/getShowDetailsByCity',params)
}}