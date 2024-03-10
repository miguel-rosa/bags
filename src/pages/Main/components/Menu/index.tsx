import React from 'react'

import styles from './Menu.module.css'
import logo from '../../../../assets/logo.svg'

import { GrHomeRounded } from 'react-icons/gr'

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <img src={logo} className={styles.logo} />
      <GrHomeRounded color='white' />
    </div >
  )
}

export default Menu
