export interface Events{
        id:number
        title: string
        img:{
            src: string
            alt: string
        },
        date:{
            fullTime:string
            hours:string
        },
        place:string,
        link:string
  
} 
export interface LeaderShipType {
    image:string
    name:string
    content:string
    _id:string
    job:string
}