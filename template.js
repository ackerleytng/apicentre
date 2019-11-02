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
            {% for link in links %}
            <Nav.Link as={Link} to="/{{ link.path }}">{{ link.label }}</Nav.Link>
            {% endfor %}
          </Nav>
        </Navbar>
      </div>
      <div id="content">
        <Switch>
          <Route exact path='/' component={Home} />
          {% for link in links %}
          <DocRoute exact path="/{{ link.path }}" address="{{ link.addr }}" />
          {% endfor %}
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
