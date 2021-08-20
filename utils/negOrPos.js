export function negOrPos() {
  const num = Math.random();
  let multiplier;
  if(num < 0.5) {
    multiplier = -1;
  } else {
    multiplier = 1;
  }
  return multiplier;
}