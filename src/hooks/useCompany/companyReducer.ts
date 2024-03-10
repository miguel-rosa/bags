export type Action = Company & {
  type:
  | 'setCompany'

}

export default (_state: Company, action: Action): Company => {
  switch (action.type) {
    case 'setCompany':
      return {
        ...action
      }
    default:
      return _state
  }
}
