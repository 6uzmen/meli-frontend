export const moneyFormatter = (amount: number, currency) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    currencyDisplay: 'symbol',
  });
  return formatter.format(amount);
};
