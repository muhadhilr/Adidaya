export const IDRCurrency = ({ nominal }) => {
  const formattedNominal = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(nominal);
  return formattedNominal.replace(/\,00$/, "");
};
