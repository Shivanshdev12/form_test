import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router";
import SignUp from "./SignUp/SignUp";
import Verify from "./Verify/Verify";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/">
          <SignUp />
        </Route>
        <Route path="/verify">
          <Verify />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
