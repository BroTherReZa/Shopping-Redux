import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Shopping from "./containers/Shopping/Shopping";
import Checkout from './containers/Checkout/Checkout'
import Account from './containers/Account/Account'

//test git
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Switch>
            <Route path="/" exact component={Shopping} />
            <Route path="/account" exact component={Account} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
