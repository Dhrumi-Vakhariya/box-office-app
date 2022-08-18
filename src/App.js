import {
  // BrowserRouter,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
