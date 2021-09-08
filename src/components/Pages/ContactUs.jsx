import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import './ContactUs.scss'

import { Row, Col } from 'react-bootstrap'
const ContactUs = () => {
  return (
    <div className="formContainer container">
      <Row>
        <Col md={6}>
          <div className="magic-form ">
            <Formik
              initialValues={{
                name: '',
                email: '',
                phoneNumber: '',
                message: '',
                country: '',
              }}
              validationSchema={Yup.object({
                name: Yup.string().required('İsim boş bırakılamaz'),
                email: Yup.string().email().required('Email boş bırakılamaz'),
                phoneNumber: Yup.number().required('Email boş bırakılamaz'),

                country: Yup.string().required('Boş bırakılamaz'),
                message: Yup.string().required('Boş bırakılamaz'),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values)
                setTimeout(() => {
                  setSubmitting(false)
                  resetForm()
                }, 2000)
              }}
            >
              {({
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleSubmit,
                handleReset,
                handleChange,
              }) => (
                <form className="magic-form" onSubmit={handleSubmit}>
                  <h3 className="text-center">Contact Us</h3>

                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="input"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && touched.name && (
                    <div className="input-feedback">{errors.name}</div>
                  )}

                  <label htmlFor="email" className="topMargin">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="EMail"
                    className="input"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="phoneNumber" className="topMargin">
                    PhoneNumber
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    placeholder="PhoneNumber"
                    className="input"
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <div className="input-feedback">{errors.phoneNumber}</div>
                  )}

                  <label htmlFor="message" className="topMargin">
                    Message
                  </label>
                  <input
                    id="message"
                    type="textarea"
                    placeholder="Message"
                    className="input"
                    value={values.message}
                    onChange={handleChange}
                  />
                  {errors.message && touched.message && (
                    <div className="input-feedback">{errors.message}</div>
                  )}

                  <label htmlFor="country" className="topMargin">
                    Country
                  </label>
                  <div>
                    <select
                      id="country"
                      value={values.country}
                      onChange={handleChange}
                      style={{
                        marginTop: 10,
                        width: '200px',
                        padding: '5px 5px',
                        outline: 'none',
                        fontSize: '14px',
                      }}
                    >
                      <option value="" label="Country" />
                      <option value="Turkey" label="Turkey" />
                      <option
                        value="United States of Amerika"
                        label="United States of Amerika"
                      />
                      <option value="United Kingdom" label="United Kingdom" />
                    </select>
                    <button
                      type="submit"
                      className="m-3"
                      disabled={!dirty || isSubmitting}
                    >
                      Send
                    </button>
                  </div>

                  {errors.country && touched.country && (
                    <div className="input-feedback">{errors.country}</div>
                  )}

                  {errors.agree && (
                    <div className="input-feedback">{errors.agree}</div>
                  )}
                </form>
              )}
            </Formik>
          </div>
        </Col>
        <Col md={6}></Col>
      </Row>
    </div>
  )
}

export default ContactUs
