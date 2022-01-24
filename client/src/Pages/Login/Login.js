import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../JS/Actions/user'

import 'bootstrap/dist/css/bootstrap.css';


import './Login.css'

const Login = ({ history }) => {


    // state

    const [user, setUser] = useState({ email: "", password: "" });

    // dispatch 

    const dispatch = useDispatch()

    //event

    const handleChangeUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }




    return (

        <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
            <div className="container">
                <div className="card login-card">
                    <div className="row no-gutters">
                        <div className="col-md-5">

                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <p className="login-card-description">Create an account</p>
                            </div>
                            <form>

                                <input type="email" name="email" id="email"
                                    className="form-control" placeholder="Email"

                                    value={user.email}
                                    onChange={handleChangeUser}
                                ></input>



                                <input type="password" name="password" id="password"
                                    className="form-control" placeholder="password"
                                    value={user.password}
                                    onChange={handleChangeUser}
                                ></input>





                                <input name="login" id="login" className="btn btn-block login-btn mb4"
                                    type="button" defaultValue="Login"
                                    onClick={() => dispatch(login(user, history))}
                                />

                            </form>

                            <p className="login-card-footer-text">don t have an account

                                <Link to="/register" className="text-reset">Register here </Link>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );


}

export default Login