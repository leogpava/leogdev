export function tokenizeInput(input: string): string[] {
  return input
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}
