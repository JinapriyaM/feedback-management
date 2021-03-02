import { BrowserRouter, Route, Switch } from "react-router-dom";

import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";

import AppBar from "./components/AppBar/appBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/item" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
