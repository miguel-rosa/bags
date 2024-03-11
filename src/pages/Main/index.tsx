import React from 'react'
import styles from './Main.module.css'
import useCompany from '../../hooks/useCompany'

import NumericCard from '../../components/NumericCard'

import LineChartCard from '../../components/LineChartCard'
import RadarChartCard from '../../components/RadarChartCard'
import Header from './components/Header'

const Main: React.FC = () => {
  const { state: { company } } = useCompany({ id: '123' })

  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.cards}>
        <div className={styles.numericCards}>
          <NumericCard title="Total Revenue" number={company.revenue} tooltip="Revenue is a kdfajfkjd jdfskjfdks jdsfkjfds j dfis" />
          <NumericCard title="Total Debt" number={company.totalDebt} tooltip="Revenue is a kdfajfkjd jdfskjfdks jdsfkjfds j dfis" />
          <NumericCard title="Total Minimum Monthly Payment" number={company.totalMMP} tooltip="Revenue is a kdfajfkjd jdfskjfdks jdsfkjfds j dfis" />
          <NumericCard title="Current Loan" number={company.loan} tooltip="Revenue is a kdfajfkjd jdfskjfdks jdsfkjfds j dfis" />
          <NumericCard title="Expected Revenue" number={company.expectedRevenue} tooltip="Revenue is a kdfajfkjd jdfskjfdks jdsfkjfds j dfis" />
        </div>
        <div className={styles.graphs}>
          <div className={styles.graphCards}>
            <LineChartCard title="Revenue History" width="100%" data={company.revenueHistory} tooltip="Revenue is a kdfajfkjd jdfskjfdks jdsfkjfds j dfis" />
          </div>
          <div className={styles.columnCards}>
            <RadarChartCard title="Expenses" width="100%" data={company.expenses} tooltip="Revenue is a kdfajfkjd jdfskjfdks jdsfkjfds j dfis" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main
