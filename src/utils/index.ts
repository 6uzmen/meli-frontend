export const moneyFormatter = (amount: number, currency) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
};
