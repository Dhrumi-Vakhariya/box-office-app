import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/starred">
            <Starred />
          </Route>
          <Route exact path="/show/:id">
            <Show />
          </Route>
          <Route>Sorry, the page you visited does not exist.</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
