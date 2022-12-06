export async function assingFormatOptions(service) {
  const data = await service();
  let temporal = [];
  data.data.forEach((d) => {
    temporal.push({ value: d.id, label: d.name });
  });
  return temporal;
}
