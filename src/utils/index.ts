export const moneyFormatter = (amount: string | number, currency) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    currencyDisplay: 'symbol',
  });

  if (
    typeof amount === 'number' ||
    (typeof amount === 'string' && !isNaN(parseFloat(amount)))
  ) {
    return formatter.format(Number(amount));
  }
};
