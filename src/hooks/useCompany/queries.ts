import companies from '../../data/companies'

const getCompanyRevenueById = async (id: string): Promise<Company | undefined> =>
  await new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setTimeout(() => { resolve(companies.find((company) => company.id === id)) }, 250)
  })

export {
  getCompanyRevenueById
}
