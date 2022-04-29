import * as types from "./action-type"
const initalstate = {
    users:[],
    user:{},
    loading:true
}

const  userreducer = (state=initalstate,action)=>{
    switch(action.type){
        case types.GET_USERS:
            return {
                ...state,
                users:action.payload,
                loading:false
            }

            case types.DEL_USERS:
            return {
                ...state,
                loading:false
            }
            case types.ADD_USER:
            case types.EDIT_USER:
                return {
                    ...state,
                    user:action.payload,
                    loading:false
                }
        default:
            return state
    }
}


export default userreducer;