import React from 'react'
import formatCurrency from '../../utils/formatCurrency'
import styles from './NumericCard.module.css'

interface Props {
  title: string
  number: number
}

const NumericCard: React.FC<Props> = ({
  title,
  number
}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.number}>{formatCurrency(number)}</p>
    </div>
  )
}

export default NumericCard
