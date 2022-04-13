// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search'
import Trendsticker from './components/Trendsticker';
import Gifcard from './components/Gifcard';

function App() {
  return (
   <Router>
      <Home/>
     <Switch>
       <Route exact path="/"> 
         <Gifcard />
       </Route>
       <Route exact path = "/sticker">
         <Trendsticker />
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
