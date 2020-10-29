// Checks for input type="date" support from current browser
export function isDateSupported() {
  const input = document.createElement("input");
  const value = "a";
  input.setAttribute("type", "date");
  input.setAttribute("value", value);
  return input.value !== value;
}

export const invalidDateStr =
  "Please ensure your date is valid and formatted DD/MM/YYYY";
export const noLocationProvidedStr =
  "Please add both an inbound, and outbound destination";
