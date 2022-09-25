import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router";
import SignUp from "./SignUp/SignUp";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/signup" />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
