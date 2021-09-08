import React from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'
import './SingUp.scss'
import { useTranslation } from 'react-i18next'
const SingUp = () => {
  const [t, i18n] = useTranslation('home')
  return (
    <div className="d-flex justify-content-center align-items-center">
      <IconContext.Provider value={{ className: 'react-icons-singUp' }}>
        <BiUserPlus />{' '}
        <span className="singUpText">{t('hello.appSingUp')}</span>
      </IconContext.Provider>
    </div>
  )
}

export default SingUp
