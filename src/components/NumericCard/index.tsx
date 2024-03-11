import React from 'react'
import formatCurrency from '../../utils/formatCurrency'
import styles from './NumericCard.module.css'
import Tooltip from '../Tooltip'

interface Props {
  title: string
  number: number
  tooltip?: string
  isCurrency?: boolean
}

const NumericCard: React.FC<Props> = ({
  title,
  tooltip,
  number,
  isCurrency = true
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.heading}>

        <h2 className={styles.title}>{title}</h2>{tooltip ? <Tooltip description={tooltip} /> : null}
      </div>
      <p className={styles.number}>{isCurrency ? formatCurrency(number) : number}</p>
    </div>
  )
}

export default NumericCard
