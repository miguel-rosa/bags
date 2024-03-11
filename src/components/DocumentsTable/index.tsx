import React from 'react'

import { type Document } from '../../hooks/useDocuments/types'
import ChartCard from '../ChartCard'

import styles from './Table.module.css'
interface Props {
  title: string
  tooltip?: string
  heading: string[]
  documents: Document[]
}

const DocumentsTable: React.FC<Props> = ({
  heading,
  title,
  tooltip,
  documents
}) => {
  return (
    <ChartCard
      title={title}
      tooltip={tooltip}
      width="100%"
    >
      <div>
        <div className={styles.table}>
          <div className={styles.columns}>
            <div className={styles.heading}>
              {heading.map((title) => (
                <p key="title" className={styles.titleRow}>{title}</p>
              ))}
            </div>
          </div>
          <div className={styles.columns}>
            {
              documents.map((document) => (
                <div key={document.id} className={styles.row}>
                  <p className={styles.rowText}>{document.name}</p>
                  <p className={styles.rowText}>{document.type}</p>
                  <p className={styles.rowText}>{new Date(document.uploadedAt).toLocaleDateString()}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </ChartCard>
  )
}

export default DocumentsTable
