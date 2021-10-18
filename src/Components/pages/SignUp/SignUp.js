import React from 'react';
import { Button } from '../../Button';
import './SignUp.css';
import { AiFillFacebook, AiFillGoogleCircle, AiOutlineGithub } from 'react-icons/ai';

const SignUp = () => {
  return (
    <div className="signup">
      <section className='signup-container'>
        <h2 className='signup-heading'>
          Sign Up
        </h2>
        <div className='input-area'>
          <input
            className='signup-input'
            name='email'
            type='email'
            placeholder='Put E-mail'
          />
          <input
            className='signup-input'
            name='password'
            type='password'
            placeholder='Put password'
          />
          <input
            className='signup-input'
            name='confirm-password'
            type='password'
            placeholder='Confirm Password'
          />
          <Button buttonSize='btn--medium' buttonColor='blue'>Sign Up</Button>
        </div>
      </section>
      <section className="signup-container">
        <div className='input-area-btn'>
          <h2 className='signup-heading'>
            Sign Up with</h2>
          <Button buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiFillGoogleCircle className='auth-icons' /> Sign Up With Google</Button>
          <Button buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiFillFacebook className='auth-icons' />Sign Up With FaceBook</Button>
          <Button buttonStyle='btn--outline' buttonSize='btn--medium' buttonColor='black'><AiOutlineGithub className='auth-icons' />Sign Up With Github</Button>
        </div>
      </section>
    </div>
  );
};

export default SignUp;