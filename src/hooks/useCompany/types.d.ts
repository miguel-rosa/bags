interface Company {
  id: string
  name: string
  revenue: number
  totalDebt: number
  totalMMP: number
  loan: number
  expectedRevenue: number
  revenueHistory: Array<{
    name: string
    value: number

  }>
  expenses: Array<{
    subject: string
    A: number
  }>
}
