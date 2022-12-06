import api from "../instance";

export const serviceListProducts = async (params) => {
  return await api.get("/products/" + params);
};
export const serviceCreateProduct = async (body) => {
  console.log(body);
  return await api.post("/products/", body);
};

export const serviceUpdateProduct = async (id, body) => {
  return await api.put("/products/" + id, body);
};
