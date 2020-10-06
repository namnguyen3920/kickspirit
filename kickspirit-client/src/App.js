import React from 'react';
import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import MainPage from "./Page/MainPage";
import ContactForm from "./Page/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
        <Switch>
          <Route>
            <div path="/admin">

            </div>
          </Route>
          <Route path="/">
            <div>
            <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"> </script>
            <link rel="stylesheet" media="screen" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
            <script src="http://code.jquery.com/jquery.js"></script>
            <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
            <link rel="stylesheet" href="./css/main.css" />

              <Header />

              <div className="main-content">
                  <Switch>
                    <Route>
                      <div path="/">
                          <MainPage />
                      </div>
                      <div path="/news">

                      </div>
                      <div path="/shop">

                      </div>
                      <div path="/contact">
                          <ContactForm />
                      </div>
                    </Route>
                  </Switch>
              </div>
                <Footer />
            </div>
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
