import React from 'react'
import { useTranslation } from 'react-i18next'
import turkishFlag from '../icons/turkish.svg'
import englishFlag from '../icons/english.svg'
import './LanguageSwitcher.scss'
const LanguageSwitcher = () => {
  const [t, i18n] = useTranslation('header')
  return (
    <div className="languageSwitcher">
      <img
        onClick={() => i18n.changeLanguage('tr')}
        src={turkishFlag}
        alt=""
        srcset=""
      />

      <img
        onClick={() => i18n.changeLanguage('en')}
        src={englishFlag}
        alt=""
        srcset=""
      />
    </div>
  )
}

export default LanguageSwitcher
