export interface Action {
  type:
  | 'setCompany'
  data: Company
}

export default (_state: Company, action: Action): Company => {
  switch (action.type) {
    case 'setCompany':
      return {
        ...action.data
      }
    default:
      return _state
  }
}
