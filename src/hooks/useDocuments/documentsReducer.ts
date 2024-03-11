import { type Document } from './types'

export interface Action {
  type:
  | 'setDocuments'
  data: Document[]
}
export default (_state: Document[], action: Action): Document[] => {
  console.log('...action.data', action)
  switch (action.type) {
    case 'setDocuments':
      return action.data

    default:
      return _state
  }
}
