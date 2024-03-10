import React from 'react'

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import ChartCard from '../ChartCard'

interface Props {
  data: Array<{
    name: string
    value: number
  }>
  title: string
  width?: string
}
const LineChartCard: React.FC<Props> = ({
  data,
  title,
  width
}) => {
  return (
    <ChartCard
      title={title}
      width={width}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export default LineChartCard
