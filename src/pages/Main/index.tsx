import React from 'react'
import './Main.css'
import useCompany from '../../hooks/useCompany'

import NumericCard from '../../components/NumericCard'
import useUser from '../../hooks/useUser'
import LineChartCard from '../../components/LineChartCard'
import RadarChartCard from '../../components/RadarChartCard'

const Main: React.FC = () => {
  const { state: { company } } = useCompany({ id: '123' })

  const { state: { user } } = useUser()

  return (
    <main className="main">

      <div className="header">

        {user ? <h1 className="title">Welcome, {user.name}</h1> : null}
        <p className="description">These are the the latest metrics for {company.name}</p>
      </div>
      <div className="cards">
        <NumericCard title="Total Revenue" number={company.revenue} />
        <NumericCard title="Total Debt" number={company.totalDebt} />
        <NumericCard title="Total Minimum Monthly Payment" number={company.totalMMP} />
        <NumericCard title="Current Loan" number={company.loan} />
        <NumericCard title="Expected Revenue" number={company.expectedRevenue} />
      </div>
      <div className="graphs">

        <div className="graph-cards">
          <LineChartCard title="Revenue History" width="100%" data={company.revenueHistory} />
          {/* <LineChartCard data={company.revenueHistory} maxWidth='20%' /> */}
        </div>
        <div className="column-cards">
          <RadarChartCard title="Expenses" width="100%" data={company.expenses} />
        </div>
      </div>
    </main>
  )
}

export default Main
