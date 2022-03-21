import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { login } from '../../Redux/action/Auth';
import { toast } from "react-toastify"
import IsLoadingHOC from '../IsLoadingHOC';
import './login.css'

const Login = (props) => {
  const { login, setLoading } = props
  const history = useHistory()
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return (
    <div>
      <h3>Enigma</h3>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { setSubmitting }) => {
          if (!values.email) {
            toast.error("Email is required !")
          }
          else if (!values.email.match(mailformat)) {
            toast.error("Email address invalid !")
          }
          else if (!values.password) {
            toast.error("Password is required !")
          }
          else if (values.password.length < 8) {
            toast.error("Password must be 8 chars long!")
          }
          else {
             setLoading(true)
            await login(values)
              .then(
                response => {
                  setLoading(false)
                  toast.success(response.message)
                  history.push("/")
                },
                error => {
                  setLoading(false)
                  toast.error(error.response.data.message);
                  setSubmitting(false);
                }
              )
              .catch(
                error => console.log(error)
              )
          }
        }}>

        {({
          isSubmitting,
          handleSubmit,
          handleChange,
          handleBlur,
          values
        }) => (
          <form onSubmit={handleSubmit} >
            <div className="form-group">
              <label>Email address</label>
              <input
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                type="password" className="form-control" placeholder="Enter password" />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
              Forgot <Link to="#">password?</Link>
            </p>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default connect(null, { login })(IsLoadingHOC(Login))