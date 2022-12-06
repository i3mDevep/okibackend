export function generaterColor() {
  var simbolos, color;
  simbolos = "0123456789ABCDEF";
  color = "#";

  for (var i = 0; i < 6; i++) {
    color = color + simbolos[Math.floor(Math.random() * 16)];
  }

  return color;
}
