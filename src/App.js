import { useState } from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./beforeLogin/Home";
import Verify from "./auth/Verify";
import Register from "./auth/Register";
import Project from "./afterSignIn/project/Project";
import { AuthContextProvider } from "./context/AuthContext";
// import Main from "./main/Main";
import Dashboard from "./afterSignIn/dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import Aboutproject from "./afterSignIn/project/Aboutproject";
import New from "./afterSignIn/project/New";
import Index from "./templates/template1/Index";
import { FormContext } from "./context/FormContext";
function App() {

    const [Dataa, setDataa] = useState()
    
   function addData (data) {
        const formData = data;

        const arrone = data[0]
        console.log(formData)
        setDataa(arrone)
        console.log(arrone)

        localStorage.setItem("project", JSON.stringify(arrone))
   }

   console.log(Dataa)

   const lsdata = JSON.parse(localStorage.getItem("project"))
   
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact={true} path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route
                            exact={true}
                            path="/register"
                            component={Register}
                        >
                            <Register />
                        </Route>
                        <Route exact={true} path="/signin">
                            <Verify />
                        </Route>
                        <Route path="/project">
                            <Project />
                        </Route>


                        <FormContext.Provider value={lsdata}>
                        <Route path="/newtransfer">
                            <Aboutproject onAddData={addData}/>
                        </Route>
                        <Route path="/test">
                            <Index />
                        </Route>
                        </FormContext.Provider>
                        <Route path="*">
                            <h2>ERROR</h2>
                        </Route>
                    </Switch>
                </Router>
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;
