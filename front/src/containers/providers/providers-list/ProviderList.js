import React, { useState, useEffect } from "react";
import AlignItemsList from "../../../components/common/list-contact/ListContact";
import ItemProvider from "../../../components/providers/provider-item";
import { question } from "../../../components/common/confirm";

import {
  serviceListProviders,
  serviceDeleteProvider,
} from "../../../services/providers";

async function re_render(setState) {
  let res = await serviceListProviders();
  setState(res.data);
}

function ProviderListContainer({ notification_create }) {
  const [providers, setproviders] = useState([]);

  const handleDelete = async (id) => {
    question(
      {
        title: "Cuidado!!! 😳",
        message:
          "Si eliminas esto, todos los productos o recursos relacionados tambien seran eliminados !!!",
      },
      async () => {
        await serviceDeleteProvider(id);
        re_render(setproviders);
      }
    );
  };

  useEffect(async () => {
    re_render(setproviders);
  }, [notification_create]);

  return (
    <AlignItemsList
      title="Lista de proveedores"
      component={ItemProvider}
      list={providers}
      onClick={handleDelete}
    />
  );
}

export default ProviderListContainer;
