export function triggerCalculatorShare(payload = {}) {
  try {
    if (typeof window === "undefined") return;

    window.dispatchEvent(
      new CustomEvent("calculator-share-update", {
        detail: payload,
      })
    );
  } catch (err) {
    console.error("triggerCalculatorShare error", err);
  }
}
