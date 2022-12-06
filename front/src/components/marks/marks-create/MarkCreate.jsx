import React from "react";
import { imgMarks } from "../../common/urls";
import { GenericForm } from '../../common/templeate-forms'

import ContentInformation from "../../layout/content-information";

export default function MarkCreateComponent(props) {
  return (
    <ContentInformation
      img={imgMarks}
      description="Visualiza y crea nuevas marcas"
    >
      <GenericForm button="Crear Marca" {...props} />
    </ContentInformation>
  );
}
