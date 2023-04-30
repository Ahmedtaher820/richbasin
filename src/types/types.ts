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
export interface PublicFormData {
    content: string 
    header: string 
    image: string
    date:string 
    _id:string 
}
export interface location{
    coordinates:string[]
    address:string
}
export interface Contact{
    email:string
    phoneNumber1: string
    phoneNumber2: string
    location: location
    _id:string | null
}