import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppNavConfig from "./config/AppNavConfig";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppNavConfig />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/starred">
            <Starred />
          </Route>
          <Route>Sorry, the page you visited does not exist.</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
