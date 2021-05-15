import "./styles.css" ;
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from "./Components";
export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Switch>
       <Route exact path='/home' component={Home}></Route>
     </Switch>
    </BrowserRouter>
    </div>
  );
}
