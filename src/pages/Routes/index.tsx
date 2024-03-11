import React from 'react'
import styles from './Routes.module.css'
import Menu from './components/Menu'

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'

import Main from '../Main'
import Documents from '../Documents'

const Routes: React.FC = () => {
  return (
    <Router>
      <main className={styles.main}>
        <Menu />

        <Switch>
          <Route path="/documents" element={<Documents />} />
          <Route path="/" element={<Main />} />
        </Switch>

      </main>
    </Router >
  )
}

export default Routes
