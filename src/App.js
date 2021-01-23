import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Register from "./pages/Register/Register";
import SignIn from './pages/SignIn/SignIn';
import Upload from './pages/Upload/Upload';

import AppBar from './components/AppBar/appBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppBar />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/upload' component={Upload} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
