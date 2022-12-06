import React, { useState, useEffect } from "react";
import AlignItemsList from "../../../components/common/list-contact/ListContact";
import ItemMarkComponent from "../../../components/marks/mark-item";
import { question } from "../../../components/common/confirm";
import { serviceListMarks, serviceDeleteMark } from "../../../services/marks";

async function re_render(setState) {
  let res = await serviceListMarks();
  setState(res.data);
}

function MarkListContainer({ notification_create }) {
  const [marks, setmarks] = useState([]);

  const handleDelete = async (id) => {
    question(
      {
        title: "Cuidado!!! 😳",
        message:
          "Si eliminas esto, todos los productos o recursos relacionados tambien seran eliminados !!!",
      },
      async () => {
        await serviceDeleteMark(id);
        re_render(setmarks);
      }
    );
  };

  useEffect(async () => {
    re_render(setmarks);
  }, [notification_create]);

  return (
    <AlignItemsList
      title="Lista de marcas"
      component={ItemMarkComponent}
      list={marks}
      onClick={handleDelete}
    />
  );
}

export default MarkListContainer;
