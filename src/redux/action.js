import * as types from "./action-type"
import axios from "axios"





const getusers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});


const deleteuser = () => ({
    type: types.ADD_USER,
    
});

const useradded = () => ({
    type: types.DEL_USERS,
    
});

const edituser = (user) => ({
    type: types.EDIT_USER,
    payload:user,
    
});

export const loadusers = () => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/data`).then((resp)=>{console.log(resp)
            dispatch(getusers(resp.data));

        }).catch((err)=>{console.log(err)})
    

    }
}

export const deletedusers = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:3001/data/${id}`).then((resp)=>{console.log(resp)
            dispatch(deleteuser());

            dispatch(loadusers())

        }).catch((err)=>{console.log(err)})
    

    }
}
export const addusers = (user) => {
    return function (dispatch) {
        axios.post(`http://localhost:3001/data`,user).then((resp)=>{console.log(resp)
            dispatch(useradded());

            dispatch(loadusers())
           

        }).catch((err)=>{console.log(err)})
    

    }
}
export const editdusers = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/data/${id}`).then((resp)=>{console.log(resp)
            dispatch(edituser(resp.data));

            

        }).catch((err)=>{console.log(err)})
    

    }
}