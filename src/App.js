import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navigation from './components/Navigation'
import { Route,Switch } from 'react-router-dom'
import About from './components/About'
import Faq from './components/Faq'
import Footer from './components/Footer';
import Login from './components/Login';
import Contact from './components/Contact';
import Register from './components/Register';
const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/Faq' component={Faq} />
        <Route exact path='/login' component={Register} />
        <Route exact path='/register' component={Login} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
    
  )
}

export default App