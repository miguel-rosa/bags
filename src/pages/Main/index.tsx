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
          <NumericCard title="Total Revenue" number={company.revenue} tooltip="Revenue is your company total income" />
          <NumericCard title="Total Debt" number={company.totalDebt} tooltip="Total debt is calculated by adding up a company's liabilities, or debts, which are categorized as short and long-term debt" />
          <NumericCard title="Total Minimum Monthly Payment" number={company.totalMMP} tooltip="This is the lowest amount that your company can pay on revolving credit per month to keep health " />
          <NumericCard title="Current Loan" number={company.loan} tooltip="To which all payments of principal and interest then due have been paid, except for the most recent payment then due of principal and interest." />
          <NumericCard title="Expected Revenue" number={company.expectedRevenue} tooltip="The expected Revenue is calculated by the sum of the value in each stage multiplied by that stage's probability" />
        </div>
        <div className={styles.graphs}>
          <div className={styles.graphCards}>
            <LineChartCard title="Revenue History" width="100%" data={company.revenueHistory} tooltip="The revenue history from your company" />
          </div>
          <div className={styles.columnCards}>
            <RadarChartCard title="Expenses" width="100%" data={company.expenses} tooltip="The expenses of this mont, divided by category" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main
