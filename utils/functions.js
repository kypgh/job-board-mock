export const formatArrayForSelect = (array) => {
  if (!array) return [];

  return array.map((el) => {
    if (typeof el === "string" || typeof el === "number") {
      return {
        value: el,
        label: el,
      };
    }
    if (typeof el === "object") {
      return {
        value: el.value,
        label: el.label || el.name || el.value,
      };
    }
    return el;
  });
};
