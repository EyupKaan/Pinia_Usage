import { defineStore } from "pinia";

export const useUserStore = defineStore('UserStore', {
    state: () => ({
            user: 'Eyup Kaan'        
        }),
        getters: {
            firstName() {
                return this.user
        }
    }
})