
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about-us">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
