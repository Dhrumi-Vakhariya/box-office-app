import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          This is a home page!
        </Route>
        <Route exact path="/starred">
          This is a starred page!
        </Route>
        <Route>Sorry, the page you visited does not exist.</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
