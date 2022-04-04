import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Home from "../page/Home";
import NoMatch from "../page/NoMatch";


export const routeList = [
  {
    path: "/",
    component: Home,
    exact: true
  },
];

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Switch>
        {routeList.map((item) => (
          <Route key={item.path} exact path={item.path} component={item.component} />
        ))}
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
