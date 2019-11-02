import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const NotFound = () => <p>Not found</p>;
const Home = () => <p>Home</p>;
const ApiDoc = ({ address }) => (
  <iframe
    frameBorder="0"
    style={{width: '100%', height: '100%'}}
    title="the-iframe"
    id="the-iframe"
    src={address}
  />
);

const DocRoute = ({address, ...props}) => (
  <Route
    {...props}
    render={() => <ApiDoc address={address} />}
  />
);

const App = () => (
  <div id="box">
    <BrowserRouter>
      <div id="navbar">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Apicentre</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/"></Nav.Link>
            <Nav.Link as={Link} to="/apple">Apple</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div id="content">
        <Switch>
          <Route exact path='/' component={Home} />
          <DocRoute exact path="/apple" address="https://pyjwt.readthedocs.io/en/latest/usage.html" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
