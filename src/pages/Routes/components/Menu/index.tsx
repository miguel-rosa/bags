import React from 'react'

import styles from './Menu.module.css'
import logo from '../../../../assets/logo.svg'

import { GrHomeRounded, GrDocumentText } from 'react-icons/gr'
import useUser from '../../../../hooks/useUser'
import { Link } from 'react-router-dom'

const Menu: React.FC = () => {
  const {
    state: { user }
  } = useUser()
  return (
    <div className={styles.menu}>
      <img src={logo} className={styles.logo} />
      <div className={styles.items}>
        <Link to="/" className={styles.item}>
          <GrHomeRounded color='white' />
        </Link>
        <Link to="/documents" className={styles.item}>
          <GrDocumentText color='white' />
        </Link>
      </div>
      <footer className={styles.footer}>
        <p className={styles.mail}>{user?.email}</p>
      </footer>
    </div >
  )
}

export default Menu
