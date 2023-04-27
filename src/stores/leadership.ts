import { defineStore } from "pinia";
import leadershipServices from "../services/leadershipServices";
import type {LeaderShipType} from "../types/types"

export const leadership = defineStore({
    id:'leadership',
    state:()=>({
        leadershipInfo:[] as LeaderShipType[]
    }),
    getters:{
        getLeaderShip : state => state.leadershipInfo,
        getLeaderShipById : state => (id:any) => state.leadershipInfo.find((e:LeaderShipType) => e._id === id)
    },
    actions:{
        async getAllLeaderShip():Promise<any>{
            return leadershipServices.getAllLeaderShip().then((res)=>{
                this.leadershipInfo = res.data.documents
                return res
            })
        }
    }
})