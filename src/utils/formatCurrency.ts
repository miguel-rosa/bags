export default (value: number): string => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return USDollar.format(value)
}
