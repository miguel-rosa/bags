import React from 'react'
import styles from './Main.module.css'
import useCompany from '../../hooks/useCompany'

import NumericCard from '../../components/NumericCard'

import LineChartCard from '../../components/LineChartCard'
import RadarChartCard from '../../components/RadarChartCard'
import Menu from './components/Menu'
import Header from './components/Header'

const Main: React.FC = () => {
  const { state: { company } } = useCompany({ id: '123' })

  return (
    <main className={styles.main}>
      <Menu />
      <div className={styles.body}>
        <Header />
        <div className={styles.cards}>
          <div className={styles.numericCards}>
            <NumericCard title="Total Revenue" number={company.revenue} />
            <NumericCard title="Total Debt" number={company.totalDebt} />
            <NumericCard title="Total Minimum Monthly Payment" number={company.totalMMP} />
            <NumericCard title="Current Loan" number={company.loan} />
            <NumericCard title="Expected Revenue" number={company.expectedRevenue} />
          </div>
          <div className={styles.graphs}>
            <div className={styles.graphCards}>
              <LineChartCard title="Revenue History" width="100%" data={company.revenueHistory} />
            </div>
            <div className={styles.columnCards}>
              <RadarChartCard title="Expenses" width="100%" data={company.expenses} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
