import React from "react";
import { imgDogAndPerson } from "../../common/urls";
import { GenericForm } from '../../common/templeate-forms'

import ContentInformation from "../../layout/content-information";

export default function ProductCreateComponent(props) {
  return (
    <ContentInformation
      img={imgDogAndPerson}
      description="Crea tus productos desde este lugar"
    >
      <GenericForm button="Crear Producto" {...props} />
    </ContentInformation>
  );
}
