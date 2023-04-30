
import {defineStore} from "pinia"
import getData from "../services/getData";
import type {PublicFormData} from "../types/types"
import type {LeaderShipType} from "../types/types"
import type {Contact} from "../types/types"

export const getAllData = defineStore('news',{
    state: ()=>({
        news : [] as PublicFormData[],
        services : [] as {
            content: string[]
            header: string 
            image: string
            date:string 
            _id:string 
        }[],
        contact : {} as Contact,
        projects : [] as PublicFormData[],
        leadershipInfo:[] as LeaderShipType[],
        csr:[] as PublicFormData[],


    }),
    getters:{
        getLeaderShip : state => state.leadershipInfo,
        getLeaderShipById : state => (id:any) => state.leadershipInfo.find((e:LeaderShipType) => e._id === id),
        getNewsById : state => (id:any) => state.news.find((e:PublicFormData) => e._id === id),
        getProjectsById : state => (id:any) => state.projects.find((e:PublicFormData) => e._id === id),
    },
    actions:{
        async getNews(){
            return getData.getNews().then((res)=>{
                this.news = res.data.documents
                return res
            })
        },
        async getServices(){
            return getData.getAllServices().then((res)=>{
                this.services = res.data.documents
                return res
            })
        },
        async getContact(){
            return getData.getAllContact().then((res)=>{
                this.contact = res.data.documents[0]
                return res.data.documents
            })
        },
        async getProjects(){
            return getData.getAllProjects().then((res)=>{
                this.projects = res.data.documents
                return res
            })
        },
        async getAllLeaderShip():Promise<any>{
            return getData.getAllLeaderShip().then((res)=>{
                this.leadershipInfo = res.data.documents
                return res
            })
        },
        async getCsr():Promise<any>{
            return getData.getCsr().then((res)=>{
                this.leadershipInfo = res.data.documents
                return res
            })
        },
    }
})