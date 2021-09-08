import React, { Component } from 'react'
import './Footer.scss'
import { IconContext } from 'react-icons/lib'
import { GrMail } from 'react-icons/gr'
import { BiMap } from 'react-icons/bi'
import { FiPhone } from 'react-icons/fi'
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai'

export default class Footer extends Component {
  render() {
    return (
      <IconContext.Provider value={{ className: 'react-footer-icons' }}>
        <div className="footer container">
          <div className="footerContact">
            <ul>
              <li>
                <a href="geo:124.028582,-29.201930">
                  <BiMap />
                  <span> Konya / Turkey</span>
                </a>
              </li>
              <li>
                <a href="tel:+905524602017">
                  <FiPhone />
                  <span> 0552 460 20 17</span>
                </a>
              </li>
              <li>
                <a href="mailto:mail.ahmetaktas@gmail.com">
                  <GrMail /> <span>mail.ahmetaktas@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footerSocialMeadia">
            <ul>
              <li>
                <a href="https://twitter.com/ahmetaktass">
                  <AiFillTwitterCircle />
                  <span> ahmetaktass</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/ahmetaktass">
                  <AiFillGithub />
                  <span> ahmetaktass</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ahmetaktass/">
                  <AiFillLinkedin /> <span>ahmetaktass</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    )
  }
}
