import { useEffect, useReducer, useState } from 'react'
import { getCompanyRevenueById } from './queries'
import companyReducer from './companyReducer'

interface Props {
  id: string
}

interface UseCompany {
  state: {
    company: Company
    hasError: boolean
  }
}

const useCompany = ({
  id
}: Props): UseCompany => {
  const [company, dispatch] = useReducer(companyReducer, {
    id: '',
    name: '',
    revenue: 0,
    expectedRevenue: 0,
    totalDebt: 0,
    totalMMP: 0,
    loan: 0,
    revenueHistory: [],
    expenses: []
  })
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    let ignore = false

    getCompanyRevenueById(id).then((company) => {
      if (ignore) return
      if (company !== undefined) {
        dispatch({
          type: 'setCompany',
          data: company
        })
      }
    }).catch((_error) => {
      setHasError(true)
    })

    return () => {
      ignore = true
    }
  }, [id])

  return ({
    state: {
      company,
      hasError
    }
  })
}

export default useCompany
