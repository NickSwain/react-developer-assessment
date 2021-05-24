export enum Device {
  Mobile = 375,
  Tablet = 768,
  Desktop = 1366,
}

export function from(size: Device): string {
  return `(min-width: ${size}px)`;
}

export function until(size: Device): string {
  return `(max-width: ${size - 1}px)`;
}
