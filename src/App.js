import React, { Suspense } from 'react'
import './App.scss'
import Footer from './components/Pages/Footer'
import Home from './components/Pages/Home'
import ContactUs from './components/Pages/ContactUs'
// import Navbar from './components/Navbar'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'

function App() {
  return (
    <>
      <Suspense fallback="Loading">
        <Router>
          <NavbarComponent />
          <Footer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ContactUs" component={ContactUs} />
          </Switch>
        </Router>
      </Suspense>
    </>
  )
}

export default App
