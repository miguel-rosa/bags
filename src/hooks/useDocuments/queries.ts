import documents from '../../data/documents'
import { type CompanyDocument } from './types'

const getDocumentsByCompanyId = async (id: string): Promise<CompanyDocument | undefined> =>
  await new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setTimeout(() => { resolve(documents.find((document) => document.companyId === id)) }, 250)
  })

export {
  getDocumentsByCompanyId
}
