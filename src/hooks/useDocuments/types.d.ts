export interface Document {
  id: string
  uploadedAt: string
  uploadedBy: string
  type: string
  name: string
}

interface CompanyDocument {
  companyId: string
  documents: Document[]
}
