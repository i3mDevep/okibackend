import { FieldController } from "./FieldController";
import { usePromiseFields } from '../../../hooks/usePromiseFields'

export const RenderListFields = ({ render, control }) =>
{
  let fields = usePromiseFields(render, control)

  return (
    fields.map((field) => {
      let data = field;
      return (
        <FieldController key={data.controller.name} {...data}>
          {data.children}
        </FieldController>
      );
    })
  )
}
