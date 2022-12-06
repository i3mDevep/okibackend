import { instanceNotApi as api } from "../instance";

export const getUrlFrame = async () => {
  return await api.get("/metabase/");
};
