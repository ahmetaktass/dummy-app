import React, { Component } from 'react'
import './Home.scss'
import { FaRegHandPeace } from 'react-icons/fa'
import { Col, Row, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function Home() {
  const [t, i18n] = useTranslation('home')

  return (
    <Container>
      <div className="homeContainer">
        <div className="homeTitle d-flex justify-content-center align-items-center m-2 ">
          <h1 className="mr-3"> {t('hello.title')}</h1>
          <FaRegHandPeace size="2em" />
        </div>
        <div className="homeText">
          <p>{t('hello.helloText')}</p>
          <p>{t('hello.helloText2')}</p>

          <button type="button" className="btn btn-outline-light mt-4">
            Dummy App
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Home
