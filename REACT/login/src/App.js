import Login from "./Components/pages/Login"
import Registro from  "./Components/pages/Registro"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route 
        path="/"
        exact
          component={() =>(
            <PrivateRoute
              redirect="/Registro"
              userShoulBeAuth={false}
              component={<Login/>}
            />
          )}
        />
        <Route exact path="/Registro">
          <Registro/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
