export function decodedResistorValue(colors: string[]): string {
  const mainValue = COLORS.indexOf(colors[0]) * 10 + COLORS.indexOf(colors[1]);
  const multiplier = Math.pow(10, COLORS.indexOf(colors[2]));
  const ohms = mainValue * multiplier;

  if (ohms >= 1_000_000_000) {
    return `${ohms / 1_000_000_000} gigaohms`;
} else if (ohms >= 1_000_000) {
    return `${ohms / 1_000_000} megaohms`;
} else if (ohms >= 1_000) {
    return `${ohms / 1_000} kiloohms`;
} else {
    return `${ohms} ohms`;
}
}

export const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];