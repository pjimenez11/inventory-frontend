import FormAsset from "./FormAsset";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useAssets from "../../hooks/useAssets";

export default function EditAssets() {
  const { id } = useParams();

  const {
    modifyEditAssets,
    assetEdit,
    handlerUpdateAssets,
    handlerGetById,
  } = useAssets();

  useEffect(() => {
    if (id) {
      handlerGetById(id);
    }
  }, [id]);

  console.log(assetEdit);

  const onChage = (e) => {
    modifyEditAssets({ name: e.target.name, value: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handlerUpdateAssets();
  };

  return (
    <section className="min-h-max flex flex-col gap-6 items-center pb-6">
      <h1 className="text-white text-center font-semibold text-lg">
        Editar Periferico
      </h1>
      <FormAsset
        values={assetEdit}
        onChage={onChage}
        onSubmit={onSubmit}
      />
    </section>
  );
}
