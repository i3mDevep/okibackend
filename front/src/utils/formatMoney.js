export function parseFormatMoney(data, tag) {
  try {
    return parseInt(data[tag].split("$")[1].replaceAll(",", ""));
  } catch (error) {
    return -1;
  }
}
