# UserProvider and useUser

`UserProvider` is a context provider that wraps your app and provides the user informations to be used in the child components.

```jsx
<UserProvider>
  <App />
</UserProvider>
```

`useUser` is a hook that handles the user auhtentication and get the user informations.

```jsx
useUser()
```



## Reference
```jsx
<UserProvider>
  <App />
</UserProvider>
```
Wrap your app with the `UserProvider` at the top level of your component tree.

```jsx
useUser()
```
Call `useUser` at the top level of your component, and pass the user ID as an argument.

```jsx

import {useUser} from 'hooks/useUser'

function UserList() {
  const { state: {
    id,
    name,
    email,
    hasError,
  } } = useUser()
}
...
```
### Parameters
`useUser` does not take any parameters.

### Returns
- `state` The state of the hook
  - `id` The user ID
  - `name` The user name
  - `email` The user email
  - `hasError` An boolean that indicates if the hook has any error

### Caveats
- The `UserProvider` should be used at the top level of your component tree