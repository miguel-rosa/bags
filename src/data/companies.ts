const companies: Company[] = [
  {
    id: '123',
    name: 'Clothing',
    revenue: 2000,
    totalDebt: 4900,
    expectedRevenue: 2000,
    totalMMP: 4000,
    loan: 9000,
    expenses: [
      {
        subject: 'Rent',
        A: 3000

      },
      {
        subject: 'Salaries',
        A: 6750
      },
      {
        subject: 'Utilities',
        A: 1200
      }
    ],

    // goals: {
    //   revenue: 2000,
    //   loan: 500

    // },
    revenueHistory: [
      {
        name: 'Sep',
        value: 25042

      },
      {
        name: 'Oct',
        value: 35426

      },
      {
        name: 'Nov',
        value: 49402

      },
      {
        name: 'Dec',
        value: 56042

      },
      {
        name: 'Jan',
        value: 49024

      },
      {
        name: 'Feb',
        value: 35025

      }
    ]
  }
]

export default companies
