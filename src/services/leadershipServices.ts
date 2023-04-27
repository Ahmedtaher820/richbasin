import DataServices from "./DataServices/DataServices"
export default {
    getAllLeaderShip(){
        return DataServices.get('/teams')
    }
}