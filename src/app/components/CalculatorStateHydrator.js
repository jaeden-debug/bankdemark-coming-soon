"use client";

import { useEffect } from "react";
import { decodeCalculatorState } from "@/app/lib/calculatorShare";

export default function CalculatorStateHydrator({
  encodedData,
}) {
  useEffect(() => {
    if (!encodedData) return;

    let decoded = {};

    try {
      decoded = decodeCalculatorState(encodedData);
    } catch {
      decoded = {};
    }

    const inputs = decoded?.inputs || {};

    Object.entries(inputs).forEach(([label, value]) => {
      const spans = Array.from(
        document.querySelectorAll("label span")
      );

      const match = spans.find(
        (s) => s.innerText.trim() === label
      );

      if (!match) return;

      const input =
        match.parentElement.querySelector("input");

      if (!input) return;

      input.value = value;

      input.dispatchEvent(
        new Event("input", { bubbles: true })
      );

      input.dispatchEvent(
        new Event("change", { bubbles: true })
      );
    });
  }, [encodedData]);

  return null;
}
