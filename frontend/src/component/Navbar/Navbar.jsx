import React from 'react'
import './Navbar.scss'
import { HiMenuAlt4 } from 'react-icons/hi'
import { HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { images } from '../../asset/Image'


function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="My logo" />
        </div>
        <ul className='app__navbar-links'>
          {['home', 'about', 'contact', 'work',].map(item => {
            return(
              <li key={`links-${item}`} className='app__flex p-text'>
                <div/>
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          })}
        </ul>

        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          {toggle && (
              <motion.div
                whileInView={{x: [300, 0]}}
                transition={{duration:0.85, ease:'easeInOut'}}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['home', 'about', 'contact', 'work',].map(item => {
                    return(
                      <li key={item} className='app__flex p-text'>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            )
          }
        </div>
    </nav>
  )
}

export default Navbar