# Creating and managing hooks

This project follows the following pattern to wrap the business logic and state management in hooks:

```jsx
import {useCustomHook} from 'hooks/useCustomHook'

const {
  state: {
    ...customHookStates
  },
  dispatch: {
    ...customHookDispatch
  }
} = useCustomHook({...customHookParams})
````

## State
The states are all the logics that contain data, and are used to render the UI.

## Dispatch
The dispatches are all the logics that contain the business logic, and are used to change the state.