import ProductsTable from "../../../components/products/products-list";
import {
  serviceListProducts,
  serviceUpdateProduct,
} from "../../../services/products";

export default function ProductsTableContainer() {
  const handleEditable = (newData, oldData) => {
    return new Promise((resolve, reject) => {
      Object.assign(oldData, newData);
      newData["provider"] = newData.provider["id"]
      newData["marca"] = newData.marca["id"]
      serviceUpdateProduct(oldData.id, newData)
        .then(() => resolve())
        .catch((err) => reject(err));
    });
  };
  return (
    <div>
      <ProductsTable
        editableAction={handleEditable}
        fndata={(query) =>
          new Promise(async (resolve, reject) => {
            console.log(query);
            let params =
              "?page=" +
              (query.page + 1) +
              "&per_page=" +
              query.pageSize +
              "&search=" +
              query.search;
            try {
              const result = await serviceListProducts(params);
              resolve({
                data: result.data.results,
                page: query.page,
                totalCount: result.data.count,
              });
            } catch (error) {
              reject(error);
            }
          })
        }
      />
    </div>
  );
}
