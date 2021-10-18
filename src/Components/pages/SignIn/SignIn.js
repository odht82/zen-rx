import React from 'react';
import { Button } from '../../Button';
import './SignIn.css';
import { AiFillFacebook, AiFillGoogleCircle, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SignIn = () => {
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
                    <Button buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiFillGoogleCircle className='auth-icons' /> Sign In With Google</Button>
                    <Button buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiFillFacebook className='auth-icons' />Sign In With FaceBook</Button>
                    <Button buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiOutlineGithub className='auth-icons' />Sign In With Github</Button>
                </div>
            </section>
        </div>
    );
};

export default SignIn;