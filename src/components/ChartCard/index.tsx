import React, { type ReactElement } from 'react'

import styles from './ChartCard.module.css'

interface Props {
  children: ReactElement
  title: string
  width?: string
}

const ChartCard: React.FC<Props> = ({
  title,
  children,
  width = '50%'
}) => {
  return (
    <div className={styles.card} style={{
      maxWidth: width
    }}>
      <p className={styles.title}>
        {title}
      </p>
      <div className={styles.chart}>
        {children}
      </div>
    </div>
  )
}

export default ChartCard
