import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom"
import { connect } from "react-redux";
import { login } from "../actions/auth";


const Login = ({login}) => {
    const [formData, setFormData] = useState ({
        email: '',
        password: ''
    });
    const {email, password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        login (email, password)
    };

    // Is the user authenticate
    // Redirect the user 

    return (
        <div> 
            <h2>Login</h2>
            
                <form action="" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input 
                            className="form-controls"
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={e => onChange(e)}
                            required
                        />
                        <input 
                            className="form-controls"
                            type="password"
                            name="password"
                            placeholder="Password"
                            minLength={8}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <button onClick={onSubmit} type="submit" className="btn btn-primary">SUBMIT</button>
                </form>
                <p>
                    Don't have an account <Link to='/signup'> Sign up here </Link>
                </p> 
                <p>
                    Forget Password <Link to='/reset_password'> Reset Password </Link>
                </p>
        </div>
    )
};
    const mapStateToProps = state => ({
        // is authenticate 
    })
export default connect(null, {login})(Login);
