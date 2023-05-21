import axios from 'axios'
import router from "../../router/main"
import {
  ERR_403,
  NOT_FOUND_CODE,
  SERVER_CODE,
  SUBSCRIPTION_ENDS,
  UNAUTHORIZED_CODE,
  VALIDATION_CODE,
  PAGE_EXPIRED
} from "../../constants"
const instance = axios.create({
    baseURL:'https://lilac-shrimp-fez.cyclic.app/api'
})
instance.interceptors.response.use((response:any)=>{
    
      return response
    },
    (error) => {
        
        if (error.response.status === ERR_403) {
          window.location.href = '/welcome'
        }
        const errorData = error.response.data
        if (error.response.status === VALIDATION_CODE) { throw { ...errorData } }
    
        // eslint-disable-next-line no-throw-literal
        throw { ...errorData }
      },
)
export default instance