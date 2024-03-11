import { useEffect, useReducer, useState } from 'react'
import { getDocumentsByCompanyId } from './queries'

import documentsReducer from './documentsReducer'
import defaultState from './defaultState'
import { type Document } from './types'

interface Props {
  id: string
}

interface UseDocuments {
  state: {
    documents: Document[]
    hasError: boolean
  }
}

const useDocuments = ({
  id
}: Props): UseDocuments => {
  const [documents, dispatch] = useReducer(documentsReducer, defaultState)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    let ignore = false

    getDocumentsByCompanyId(id).then((companyDocuments) => {
      if (ignore) return
      if (companyDocuments?.documents.length) {
        dispatch({
          type: 'setDocuments',
          data: companyDocuments.documents
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
      documents,
      hasError
    }
  })
}

export default useDocuments
