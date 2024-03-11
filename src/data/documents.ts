import { type CompanyDocument } from '../hooks/useDocuments/types'

const companiesDocuments: CompanyDocument[] = [
  {
    companyId: '123',

    documents: [
      {
        id: '1',
        uploadedAt: '2023-09-22',
        uploadedBy: '12345',
        type: 'Loan Statement',
        name: 'sepLoan.pdf'
      },
      {
        id: '2',
        uploadedAt: '2023-10-22',
        uploadedBy: '12345',
        type: 'Loan Statement',
        name: 'octLoan.pdf'
      },
      {
        id: '3',
        uploadedAt: '2023-11-22',
        uploadedBy: '12345',
        type: 'Loan Statement',
        name: 'novLoan.pdf'
      },
      {
        id: '4',
        uploadedAt: '2023-12-22',
        uploadedBy: '12345',
        type: 'Loan Statement',
        name: 'decLoan.pdf'
      },
      {
        id: '5',
        uploadedAt: '2024-01-22',
        uploadedBy: '12345',
        type: 'Loan Statement',
        name: 'janLoan.pdf'
      },
      {
        id: '6',
        uploadedAt: '2024-02-22',
        uploadedBy: '12345',
        type: 'Loan Statement',
        name: 'febLoan.pdf'
      }
    ]
  }
]

export default companiesDocuments
