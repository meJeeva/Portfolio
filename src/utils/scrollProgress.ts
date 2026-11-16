export function calculateScrollProgress(
  scrollY: number,
  scrollHeight: number,
  innerHeight: number,
): number {
  const maxScroll = scrollHeight - innerHeight;
  if (maxScroll <= 0) {
    return 0;
  }

  const ratio = scrollY / maxScroll;
  if (ratio <= 0) {
    return 0;
  }
  if (ratio >= 1) {
    return 1;
  }
  return ratio;
}
