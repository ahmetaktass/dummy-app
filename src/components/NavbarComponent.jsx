import React, { Component } from 'react'
import './Navbar.scss'

import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { GiTargetDummy } from 'react-icons/gi'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import UserModal from './UserModal'

const NavbarComponent = () => {
  const [t, i18n] = useTranslation('home')

  return (
    <div className="container  ">
      <Navbar bg="transparant" variant={'dark'} expand="lg" className="navbar">
        <Navbar.Brand>
          <GiTargetDummy /> <span>Dummy App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="text-center ms-auto align-items-center  ">
            <NavLink exact to="/" className="navLinks">
              {t('hello.appHome')}
            </NavLink>

            <NavLink exact to="/ContactUs" className="navLinks">
              {t('hello.appContactUs')}
            </NavLink>
            <NavLink exact to="/" className="navLinks">
              <LanguageSwitcher />
            </NavLink>
            <NavLink exact to="/" className="navLinks">
              <UserModal />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavbarComponent
