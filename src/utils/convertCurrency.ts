const convertCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', {
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
};

export default convertCurrency;
