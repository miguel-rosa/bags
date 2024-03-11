# useCompany
`useCompany ` is a hook that lets you get all the companies informations using the company id.

```jsx
useCompany({id: companyId})
```

## Reference
```jsx
useCompany({id: companyId})
```
Call useCompany at the top level of your component, and pass the company ID as an argument.
```jsx
import {useCompany} from 'hooks/useCompany'

function CompanyList() {
  const { state: {
    id,
    name,
    revenue,
    expectedRevenue,
    totalDebt,
    totalMMP,
    loan,
    revenueHistory,
    expenses,
  } } = useCompany({id: companyId})

}

```
### Parameters
- `id` The company ID

### Returns
- `state` The state of the hook
  - `id` The company ID
  - `name` The company name
  - `revenue` The company revenue
  - `expectedRevenue` The company expected revenue
  - `totalDebt` The company total debt
  - `totalMMP` The company total MMP
  - `loan` The company loan
  - `revenueHistory` The company revenue 
    - `name` The month of the revenue
    - `value` The value of the revenue
  - `expenses` The company expenses
    - `subject` The subject of the expense
    - `value` The value of the expense
  - `hasError` An boolean that indicates if the hook has any error
