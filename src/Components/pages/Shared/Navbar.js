import React, { useState, useEffect } from 'react';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaTimes } from 'react-icons/fa';
import { VscListSelection } from 'react-icons/vsc';
import logo from '../../../Logo.png';
import useAuth from '../../../hooks/useAuth';


function Navbar() {
  const { user, logOut } = useAuth();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return window.removeEventListener('resize', showButton)
  }, []);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt="" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes style={{ color: '#06c7f2' }} /> : <VscListSelection style={{ color: '#06c7f2' }} />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/pricing'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pricings
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/doctors'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Doctors
              </Link>
            </li>

            {user.email ?
              (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Button className='btn-link' buttonStyle='btn--outline' onClick={logOut}>Sign Out</Button>
                {user.photoURL ?
                  <div style={{ backgroundColor: 'yellow', width: "50px", height: "50px", borderRadius: '8px', marginLeft: '10px', border: '2px solid #06C7F2' }}>
                    <img style={{ width: "100%", height: "100%", objectFit: 'cover', borderRadius: '6px' }} src={user.photoURL} alt="" />
                  </div> :
                  <div style={{ display: 'none', backgroundColor: 'yellow', width: "50px", height: "50px", borderRadius: '8px', marginLeft: '10px', border: '2px solid #06C7F2' }}>
                    <img style={{ display: 'none', width: "100%", height: "100%", objectFit: 'cover', borderRadius: '6px' }} src={user.photoURL} alt="" />
                  </div>
                }
                <p style={{ fontSize: '18px', marginLeft: '10px', fontWeight: 'bold', color: '#099cbd' }}>{user.displayName}</p>
              </div>
              )
              :
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-btn'>
                  {button ? (<Link to='/sign-in' className='btn-link'><Button buttonStyle='btn--outline'>SIGN IN</Button></Link>) : (<Link to='/sign-in' className='btn-link'><Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>SIGN IN</Button></Link>)}
                </li>
                <li className='nav-btn'>
                  {button ? (<Link to='/sign-up' className='btn-link'><Button buttonStyle='btn--primary'>SIGN UP</Button></Link>) : (<Link to='/sign-up' className='btn-link'><Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobileMenu} >SIGN UP</Button></Link>)}
                </li>
              </ul>
            }
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
