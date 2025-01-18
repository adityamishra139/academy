import {atom} from 'recoil' 
import {recoilPersist} from 'recoil-persist'

const {persistAtom}=  recoilPersist();

export const userState = atom({
    key:"userState",
    default:{
        id:null,
        name:"",
        email:"",
        isAdmin:false
    },
    effects_UNSTABLE:[persistAtom],
})