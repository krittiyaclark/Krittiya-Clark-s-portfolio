import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/Krittiya-Clark-avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Hi, I am Krittiya Clark.</strong> <br />
        I'm a Software Engineer working with Javascript, React, and Gatsby.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
