import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import reduxthunk from "redux-thunk"
import rootreducer from "./root-reducer"



const middleware = [reduxthunk]

if(process.env.NODE_ENV === "development"){
    middleware.push(logger)
}

export const store = createStore(rootreducer,applyMiddleware(...middleware))

