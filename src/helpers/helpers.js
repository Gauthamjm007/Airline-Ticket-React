const currencySymbols = { INR: "₹", USD: "\x24", EUR: "\u20AC" };
const stopsTitle = {
  0: "Non-stop",
  1: "1 Stop",
  2: "2 Stops",
  3: "3 Stops"
};

export const filterByStops = (tickets, stopsList, orderBy = "price") => {
  let filteredData = tickets.filter(({ stops }) => stopsList[stops]);

  if (orderBy === "price") {
    filteredData.sort(({ price: prevPrice }, { price }) => prevPrice - price);
  }
  return filteredData;
};

export const getStopTitle = (stop) => stopsTitle[stop];

export const convertToRealPrice = (price, rate, currency) =>
  `${(price * rate).toFixed()} ${currencySymbols[currency]} `;
