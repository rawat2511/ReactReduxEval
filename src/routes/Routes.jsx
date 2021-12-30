import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "./Navbar";



function Routes() {
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/checkout"><h1>Chekout</h1></Route>
        </Switch>
        </>
    )
}

export default Routes;