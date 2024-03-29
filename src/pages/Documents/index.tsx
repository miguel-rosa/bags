import React from 'react'
import styles from './Main.module.css'

import NumericCard from '../../components/NumericCard'
import useDocuments from '../../hooks/useDocuments'
import DocumentsTable from '../../components/DocumentsTable'

const Documents: React.FC = () => {
  const { state: { documents } } = useDocuments({ id: '123' })

  const documentsUploadedThisYear = documents.filter((document) => {
    const documentDate = new Date(document.uploadedAt)
    const today = new Date()
    return documentDate.getFullYear() === today.getFullYear()
  })

  return (
    <div className={styles.body}>

      <div className={styles.cards}>
        <div className={styles.numericCards}>
          <NumericCard title="Documents Uploaded this year" number={documentsUploadedThisYear.length} isCurrency={false} />
          <NumericCard title="Total Documents Uploaded" number={documents.length} isCurrency={false} />
        </div>

        <DocumentsTable title="Documents" tooltip="List of last documents uploaded" heading={['Name', 'Type', 'Uploaded At']} documents={documents} />

      </div>
    </div>
  )
}

export default Documents
