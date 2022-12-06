import React from "react";
import { imgProviders } from "../../common/urls";
import { GenericForm } from '../../common/templeate-forms'

import ContentInformation from "../../layout/content-information";

export default function ProviderCreateComponent(props) {
  return (
    <ContentInformation
      img={imgProviders}
      description="Visualiza y crea nuevos proveedores"
    >
      <GenericForm button="Crear Proveedor" {...props} />
    </ContentInformation>
  );
}
