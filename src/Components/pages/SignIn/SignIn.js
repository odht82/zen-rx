import React from 'react';
import { Button } from '../../Button';
import './SignIn.css';
import { AiFillGoogleCircle, AiOutlineGithub } from 'react-icons/ai';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignIn = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/sign-in';
    console.log(location.state)

    const handleGoogleLogin = () => {
        signInUsingGoogle().then((response) => { history.push(redirect_uri); })
    }
    const handleGithubLogin = () => {
        signInUsingGithub().then((response) => { history.push(redirect_uri); })
    }

    return (
        <div className="signin">
            <section className='signin-container'>
                <h2 className='signin-heading'>
                    Sign In
                </h2>
                <div className='input-area'>
                    <input
                        className='signin-input'
                        name='email'
                        type='email'
                        placeholder='Put E-mail'
                    />
                    <input
                        className='signin-input'
                        name='password'
                        type='password'
                        placeholder='Put password'
                    />
                    <Button buttonSize='btn--medium' buttonColor='blue'>Sign In</Button>
                    <Button buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black' > <Link to='/sign-up'>Dont have Account ?</Link></Button>
                </div>
            </section>
            <section className="signin-container">
                <div className='input-area-btn'>
                    <h2 className='signin-heading'>
                        Sign In with</h2>
                    <Button onClick={handleGoogleLogin} buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiFillGoogleCircle className='auth-icons' /> Sign In With Google</Button>
                    <Button onClick={handleGithubLogin} buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiOutlineGithub className='auth-icons' />Sign In With Github</Button>
                </div>
            </section>
        </div>
    );
};

export default SignIn;