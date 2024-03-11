import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import styles from './Tooltip.module.css'

interface Props {
  description: string
}

const Tooltip: React.FC<Props> = ({
  description
}) => {
  return (
    <div className={styles.tooltip}>
      <AiOutlineInfoCircle color="rgb(142, 142, 142)" />
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default Tooltip
