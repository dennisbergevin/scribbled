import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./ui/modal";
import Splash from "./splash_page/splash";
import Home from "./home/home";
import DocumentsIndex from "./documents/documents_index";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Modal id="form" />
        <div className="main-section">
          <div className="main-content">
            <Switch>
              {/* Render Splash page as main content component if logged out */}
              <AuthRoute exact path="/splash" component={Splash} />
              {/* Render Home page as main content component if logged in */}
              <ProtectedRoute exact path="/" component={Home} />
              <Route exact path="/documents" component={DocumentsIndex} />
              {/* Auto redirect given bad path */}
              <Redirect path="*" to="/" />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
