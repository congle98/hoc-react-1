
import './App.css';
import About from "./component/about";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navigate from "./component/navigate";
import Home from "./component/home";
import Error from "./component/error";

//npm i react-router-dom
function App() {
    let user = [
        {
            id: 10,
            name:"cong"
        },
        {
            id: 11,
            name:"cong1"
        },
        {
            id: 12,
            name:"cong2"
        },
    ]
    let render = user.map(user=>{
        return <div>
            <h1>{user.name}</h1>
        </div>
    })
    console.log(render)
  return (
    <Router>
      <Navigate></Navigate>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route path="/:somestring" component={Error}/>
          {/*hoặc */}
          {/*<Route path="/**" component={Error}/>*/}
      </Switch>
        {render}
    </Router>
  );
}

export default App;
