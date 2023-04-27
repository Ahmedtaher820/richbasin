import { defineStore } from "pinia";
export const news = defineStore({
    id:'news',
    state: ()=> ({
        newsList: [
            {
                imgSrc: 'pertol1',
                title: 'Tirex P&E Successfully Completes Ikike Well Drilling: Awarded Additional Extension',
                date: 'January 26, 2023',
                desc: 'Subsequently, and as a result of confidence in Tirex P&E’s service excellence, Total Energies has extended the offshore drilling contract which was awarded in 2021 for an additional exploration well with potentially one to two additional wells on this extension.According to the Executive Chairperson, Oyindamola Lami Adeyemi',
                link: 'example-one',
                id:1
            },
            {
                imgSrc: 'pertol1',
                title: 'Tirex P&E Successfully Completes Ikike Well Drilling: Awarded Additional Extension',
                date: 'January 26, 2023',
                desc: 'Subsequently, and as a result of confidence in Tirex P&E’s service excellence, Total Energies has extended the offshore drilling contract which was awarded in 2021 for an additional exploration well with potentially one to two additional wells on this extension.According to the Executive Chairperson, Oyindamola Lami Adeyemi',
                link: 'example-two',
                id:2
            },
            {
                imgSrc: 'pertol1',
                title: 'Tirex P&E Successfully Completes Ikike Well Drilling: Awarded Additional Extension',
                date: 'January 26, 2023',
                desc: 'Subsequently, and as a result of confidence in Tirex P&E’s service excellence, Total Energies has extended the offshore drilling contract which was awarded in 2021 for an additional exploration well with potentially one to two additional wells on this extension.According to the Executive Chairperson, Oyindamola Lami Adeyemi',
                link: 'example-three',
                id:3
            },
            {
                imgSrc: 'pertol1',
                title: 'Tirex P&E Successfully Completes Ikike Well Drilling: Awarded Additional Extension',
                date: 'January 26, 2023',
                desc: 'Subsequently, and as a result of confidence in Tirex P&E’s service excellence, Total Energies has extended the offshore drilling contract which was awarded in 2021 for an additional exploration well with potentially one to two additional wells on this extension.According to the Executive Chairperson, Oyindamola Lami Adeyemi',
                link: 'example-four',
                id:4
            },
        ]
    }),
    getters:{
        getPageContent: state => (slug:string) => state.newsList.find((item)=> item.link === slug)
    }
})