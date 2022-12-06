import api from "../instance";

export const serviceConfirmSale = async (body) => {
  return await api.post("/sale-global/confirm/", body);
};
export const serviceSales = async (query) => {
  return await api.get("/sale-global/list/" + query );
};
export const serviceSaleDetail = async (id) => {
  return await api.get("/sale-global/list/" + id);
};
export const serviceReportSaleToday = async () => {
  return await api.get("/sale-global/report-today/")
}
export const serviceReportSaleWeek = async () => {
  return await api.get("/sale-global/report-week/")
}
