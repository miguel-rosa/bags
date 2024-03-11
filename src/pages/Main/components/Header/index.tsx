import React from 'react'

import styles from './Header.module.css'

import useUser from '../../../../hooks/useUser'
import useCompany from '../../../../hooks/useCompany'

const Header: React.FC = () => {
  const { state: { user } } = useUser()
  const { state: { company } } = useCompany({ id: '123' })

  return (
    <div className={styles.header}>
      <div className={styles.message}>
        {user ? <h1 className={styles.title}>Welcome, {user.name}</h1> : null}
        <p className={styles.description}>These are the the latest metrics for <span className={styles.highlight}>{company.name}</span></p>
      </div>

      <div className={styles.buttons}>

        <a href="https://www.linkedin.com/in/miguelgoncvs/" className={styles.button}>Feedback</a>
        <a href="https://github.com/miguel-rosa/bags" className={styles.button}>Docs</a>
      </div>
    </div>
  )
}

export default Header
