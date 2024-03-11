import React, { type ReactElement } from 'react'

import styles from './ChartCard.module.css'
import Tooltip from '../Tooltip'

interface Props {
  children: ReactElement
  title: string
  width?: string
  tooltip?: string
}

const ChartCard: React.FC<Props> = ({
  title,
  children,
  width = '50%',
  tooltip
}) => {
  return (
    <div className={styles.card} style={{
      maxWidth: width
    }}>
      <div className={styles.heading}>
        <p className={styles.title}>
          {title}
        </p>
        {tooltip ? <Tooltip description={tooltip} /> : null}
      </div>
      <div className={styles.chart}>
        {children}
      </div>
    </div>
  )
}

export default ChartCard
