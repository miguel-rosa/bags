import { type CompanyDocument } from '../hooks/useDocuments/types'

const companiesDocuments: CompanyDocument[] = [
  {
    companyId: '123',

    documents: [
      {
        id: '123',
        uploadedAt: '2024-01-22',
        uploadedBy: '12345',
        type: 'Bank Statement',
        name: 'janLoan.pdf'
      },
      {
        id: '123',
        uploadedAt: '2024-02-22',
        uploadedBy: '12345',
        type: 'Bank Statement',
        name: 'febLoan.pdf'
      }
    ]
  }
]

export default companiesDocuments
