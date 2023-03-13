import { stat } from "fs"
import {defineStore} from "pinia"
export const useApp = defineStore({
    id:'app',
    state: ()=>({
        locales: [
            {
              name: 'English',
              id: 'en',
              textSymbol: 'English',
              icon: 'icons/language/en.svg',
              direction: 'ltr',
            },
            {
              name: 'Arabic',
              id: 'ar',
              textSymbol: 'Arabic',
              icon: 'icons/language/ar.svg',
              direction: 'rtl',
            },
          ],
          isAdmin:false
    }),
    getters:{
        getLocales : state => state.locales,
        getLocale: state => (locale: string) => state.locales.find(availableLocale => availableLocale.id === locale),
    },
    actions:{

    }
})