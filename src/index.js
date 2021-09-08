import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import tr_language from '../src/translations/tr/home.json'
import en_language from '../src/translations/en/home.json'

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    tr: {
      home: tr_language, // 'common' is our custom namespace
    },
    en: {
      home: en_language,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
