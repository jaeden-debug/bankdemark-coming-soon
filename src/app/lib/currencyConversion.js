export const CAD_TO_USD = 0.73;
export const USD_TO_CAD = 1 / CAD_TO_USD;

export function convertCurrencyAmount(value, fromCountry, toCountry) {
  const number = Number(value);

  if (!Number.isFinite(number) || value === "") return value;
  if (fromCountry === toCountry) return value;

  const converted =
    fromCountry === "canada" && toCountry === "usa"
      ? number * CAD_TO_USD
      : number * USD_TO_CAD;

  return String(Math.round(converted));
}
