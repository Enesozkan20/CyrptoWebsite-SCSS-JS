// Coin fiyatını formatlayan fonksiyon
const formatPrice = (number) => {
  // parametre olarak alinan ondalikli sayinin devreden kismini 2 basamakli olaxak sekilde ayarla
  let formattedNumber = Number(number).toFixed(2);

  // ondalikli sayinin icersindeki "." yi "," yap
  formattedNumber = formattedNumber.replace(".", ",");

  let integerPart = formattedNumber.split(",")[0];
  let decimalPart = formattedNumber.split(",")[1];

  // Regex ile integerPart'ı binlik ayırıcıyla formatla
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // integer ve decimal kısmı tekrar birleştir
  return `${integerPart},${decimalPart}`;
};

//Market Cap'i formatlayan fonksiyon
const formatMarketCap = (number) => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(".", ",") + " Billion";
  }
  else if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(".", ",") + " Million";
  }
};

export { formatPrice, formatMarketCap };
