import DataServices from "./DataServices/DataServices"
export default {
    getAllLeaderShip(){
        return DataServices.get('/teams')
    },
    getAllServices(){
        return DataServices.get('/services')
    },
    getAllProjects(){
        return DataServices.get('/projects')
    },
    getCsr(){
        return DataServices.get('/csr')
    },
    getAllContact(){
        return DataServices.get('/contacts')
    },
    getNews(){
        return DataServices.get('/news')
    },
    getPartnerShip(){
        return DataServices.get('/partnership')
    },
    getPartners(){
        return DataServices.get('/partnerShips')

    }
}