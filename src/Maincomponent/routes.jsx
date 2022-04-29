import {Switch,Link,Route} from "react-router-dom"
import Add from "./Adduser"
import Display_Data from "./Display_Data"
import Edit from "./Edit"

export const Routes =() =>{
    return (
        <>
        <Switch>
            <Route exact path = "/"><Display_Data/></Route>
            <Route exact path ="/add"><Add/></Route>
            <Route exact path ="/edit"><Edit/></Route>
        </Switch>
        </>
    )
}