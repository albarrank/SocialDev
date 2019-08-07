import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';


const Login = () => {
    /* 
        A React Hook that lets you set your own custom states
        'formData' would be your state === 'this.state' in 'Class extends' component
        'setFormDate' would be what you call to set the state === 'this.setState();' in 'Class extends' component
        'useState()' set your default values for the hook
    */
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onInputChange = (event) => {
        // '...formData' gets a copy of the state object so we can change any value we might need to 
        // both 'event.target' grab the value from what ever is inputed inside the '<input/>' tag
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const onLogin = async (event) => {
        event.preventDefault();
        console.log("Success")
        
    } 

    return (
        <div>
            <h1 className="large text-primary">Log In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
            <form className="form" onSubmit={(event) => onLogin(event)}>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email"
                        value={email}
                        required
                        onChange={(event) => onInputChange(event)} 
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="7"
                        value={password}
                        onChange={(event) => onInputChange(event)}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
        </div>
    );
}

export default Login;
