// import logo from './logo.svg';
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './beforeLogin/Home'
import Verify from "./auth/Verify";
import Register from "./auth/Register";
import Project from './afterSignIn/project/Project'
import { AuthContextProvider } from "./context/AuthContext";
// import Main from "./main/Main";
import Dashboard from "./afterSignIn/dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import Aboutproject from "./afterSignIn/project/Aboutproject";
import New from "./afterSignIn/project/New";

function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
        <Router>
          
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact={true}  path="/dashboard">
            <Dashboard/>
                </Route>
                <Route exact={true}  path="/register" component={Register}>
                    <Register />
                </Route>
                <Route exact={true} path="/signin">
                <Verify />
               </Route>
               <Route exact={true} path="/dashboard">
                <Dashboard />
               </Route>
               <Route path="/project">
                   <Project/>
               </Route>
               <Route path="/newtransfer">
                   <Aboutproject/>
               </Route>
               <Route path="/new">
                    <New/>
               </Route>
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
