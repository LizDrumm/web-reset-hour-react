import React from 'react'
import {Switch, Route} from 'react-router-dom'

import './css/App.css'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import Home from './components/Home'
import Dashboard from './components/private/Dashboard'
import LogIn from './components/LogIn'
import Register from './components/Register'

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div class='main'>
        <Switch>
          {/* <Route path='/about' component={About} /> */}
          <Route path='/dashboard' component={Dashboard}/>
          <Route path ='/login'component={LogIn}/>
          <Route path ='/signup'component={Register}/>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
      <footer>
        <Footer />
      </footer>

    </div>
  );
};

export default App;