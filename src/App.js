import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from 'pages/index';
import About from 'pages/about';
import Contact from 'pages/contact';
import Header from 'components/header';
import Footer from 'components/footer';
import 'styles/scss/app.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
