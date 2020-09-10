import * as React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Submitform from "./SubmitForm/Submitform";
import Products from "./products/products";

class PublicRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact  component={Submitform} />
          <Route path="/products" exact  component={Products} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(PublicRouter);
