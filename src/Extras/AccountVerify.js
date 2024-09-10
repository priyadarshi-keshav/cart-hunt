import React, { useEffect, Fragment, useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import { TextField } from '@material-ui/core'
import { Link } from "react-router-dom"
import "../assets/css/verifyemail.css"
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { resetPassword } from '../action/userAction';
import Message from './Message'


const VerifyEmail = ({ history, location }) => {

    const [verifyToken, setVerifyToken] = useState('')
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordNotMatched, setPasswordNotMatched] = useState(false)

    const { profile } = useSelector(state => state.UserLogin)
    const { loading, error, message } = useSelector(state => state.UserResetPassword)
    const dispatch = useDispatch()

    useEffect(() => {
        if (profile) {
            history.push('/')
        }
        else {
            if (location.search === "") {
                history.push('/')
            }
            else {
                const splitUrl = location.search.split("=")
                setVerifyToken(splitUrl[1])
            }
        }
    }, [history, location, profile])

    useEffect(() => {
        if (message) {
            // Redirect to the login page if a success message is present
            history.push(`/login?reset_password_success=reset_password_success`);
        }
    }, [message, history]);

    useEffect(() => {
       if (error) {
        setPassword(""); setConfirmPassword("")
       }
    }, [error]);

    const styleLogin = {
        padding: '4px',
        margin: '34px',
        height: '100vh'
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            if (confirmPassword && confirmPassword != value) setPasswordNotMatched(true);
            if (confirmPassword && confirmPassword === value) setPasswordNotMatched(false);
            setPassword(value);
        } else if (name === 'confirmPassword') {
            if (password != value) setPasswordNotMatched(true);
            if (password === value) setPasswordNotMatched(false);
            setConfirmPassword(value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({verifyToken})
        const body = {
            password,
            confirmPassword,
            resetToken: verifyToken
        }

        dispatch(resetPassword(body))
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <Fragment>
            <Row className=" justify-content-md-center" style={styleLogin}>
                <Col sm={12} md={8} lg={6}>
                    <center><p className='heading'>RESET PASSWORD</p></center>

                    {loading && <Loader />}
                    {error && <Message variant='danger'>{error}</Message>}
                    {passwordNotMatched && <Message variant='danger'>Password mismatched!</Message>}


                    <Form onSubmit={handleSubmit} style={{ marginTop: '25%' }}>

                        <Form.Group>New Password*
                            <TextField className="form-control" type="password" name="password" onChange={handleChange} required /><br />
                        </Form.Group>


                        <Form.Group>Confirm Password*
                            <TextField className="form-control" type="password" name="confirmPassword" onChange={handleChange} required /><br />
                        </Form.Group>

                        <button className="page_btn" type="submit" disabled={passwordNotMatched ? true : false}>submit</button>

                    </Form>

                </Col>
            </Row>
        </Fragment>
    )
}

export default VerifyEmail
