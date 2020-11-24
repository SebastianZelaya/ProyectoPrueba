import React from 'react';
import logo from './logouv.png';
import './App.css';
import { Container, Divider, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

import Home from './views/Home'
import Alumnos from './views/Alumnos'
import FechaPruebas from './views/FechaPruebas'
import Notas from './views/Notas'

function App() {
  return (
    <>
    <Router>
      {/* <Container> */}

        <Image centered size='medium' src={logo} />
        <Divider/>
        
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/alumnos' component={Alumnos}/>
          <Route path='/fechas' component={FechaPruebas}/>
          <Route path='/notas' component={Notas}/>
        </Switch>
        

      {/* </Container> */}
    </Router>
    </>
  );
}

export default App;
