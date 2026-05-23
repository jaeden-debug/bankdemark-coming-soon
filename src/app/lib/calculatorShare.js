export function encodeCalculatorState(obj = {}) {
  try {
    const json = JSON.stringify(obj);

    if (typeof window !== "undefined") {
      return btoa(unescape(encodeURIComponent(json)));
    }

    return Buffer.from(json, "utf8").toString("base64");
  } catch {
    return "";
  }
}

export function decodeCalculatorState(encoded = "") {
  try {
    if (!encoded) return {};

    if (typeof window !== "undefined") {
      return JSON.parse(decodeURIComponent(escape(atob(encoded))));
    }

    return JSON.parse(Buffer.from(encoded, "base64").toString("utf8"));
  } catch {
    return {};
  }
}

export function loadCalculatorState() {
  if (typeof window === "undefined") return null;

  const encoded = new URLSearchParams(window.location.search).get("data");
  if (!encoded) return null;

  return decodeCalculatorState(encoded);
}

export function updateCalculatorURL(calculator, payload) {
  if (typeof window === "undefined" || !calculator) return "";

  const encoded = encodeCalculatorState(payload);

  const url = `${window.location.origin}/calculators/${calculator}?data=${encodeURIComponent(encoded)}`;

  window.history.replaceState({}, "", url);

  return encoded;
}
