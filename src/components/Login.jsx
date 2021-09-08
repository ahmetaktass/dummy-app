import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import './Login.scss'
import { useTranslation } from 'react-i18next'
const Login = () => {
  const [t, i18n] = useTranslation('home')
  return (
    <div className="d-flex justify-content-center align-items-center">
      <IconContext.Provider value={{ className: 'react-icons-login' }}>
        <FaUserAlt /> <span className="loginText">{t('hello.appLogin')}</span>
      </IconContext.Provider>
    </div>
  )
}

export default Login
