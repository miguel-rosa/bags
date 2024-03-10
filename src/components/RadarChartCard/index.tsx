import React from 'react'

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts'
import ChartCard from '../ChartCard'

interface Props {
  data: Array<{
    subject: string
    A: number
  }>
  title: string
  width?: string

}
const RadarChartCard: React.FC<Props> = ({
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
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar dataKey="A" stroke="rgb(0, 123, 255)" fill="rgb(0, 123, 255)" fillOpacity={0.6} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </ChartCard >

  )
}

export default RadarChartCard
