# useDocuments
`useDocuments ` is a hook that lets you get all the documents from a company, using the company id.

```jsx
useDocuments({id: companyId})
```

## Reference
```jsx
useDocuments({id: companyId})
```
Call useDocuments at the top level of your component, and pass the company ID as an argument.
```jsx
import {useDocuments} from 'hooks/useDocuments'

function Documents() {
  const { state: {documents} } = useDocuments({id: companyId})

  return (
    <div>
      {documents.map((document) => (
        <div key={document.id}>{document.name}</div>
      ))}
    </div>
  )
}

```
### Parameters
- `id` - The company ID

### Returns
- `state` - The state of the hook
  - `documents` - An array of documents
  - `hasError` - An boolean that indicates if the hook has any error