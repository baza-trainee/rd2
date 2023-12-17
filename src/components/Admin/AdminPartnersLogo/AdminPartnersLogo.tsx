import React, {useState} from "react";

import {useFormik} from "formik";

import { PageContentWrapper } from "components/Admin/PageContentWrapper/PageContentWrapper";

import { validateImage } from "components/Admin/AdminPartnersLogo/loadLogosValidation";

import {LoadLogoBlock} from "components/Admin/AdminPartnersLogo/LoadLogoBlock/LoadLogoBlock";

import {ButtonsBlock} from "components/Admin/AdminPartnersLogo/ButtonsBlock/ButtonsBlock";

import {useMutation} from "react-query";

import {addLogo} from "../../../api/partnersLogo";

import {BlockFallback} from "../BlockFallback/BlockFallback";

type FormValues = {
  logoImg?: File;
}

type AdminPartnersLogoProps = {
    openModalError: (text: string) => void,
    openModalSuccess: () => void,
}
const AdminPartnersLogo = ({openModalError, openModalSuccess}: AdminPartnersLogoProps) => {

  const mutation = useMutation(
      (logo: File) => {return addLogo(logo) }, {
        onError: (error) => {
            openModalError(`Помилка завантаження. 
              ${error instanceof Error && error.message}`,
            );
        },
        onSuccess: () => {
            openModalSuccess();
        },
      },
  )

  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const initialValues: FormValues = {};
  const validate = validateImage;

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: (values,{resetForm}) => {
      values.logoImg && mutation.mutate(values.logoImg);
      resetForm({ values: {} });
      setPreviewSrc(null);
    },
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.currentTarget.files) {
      const loadImg = e.currentTarget.files[0];
      formik.setFieldValue("logoImg", loadImg, true)
        .then(() => {
          setPreviewSrc(URL.createObjectURL(loadImg));
        });
    }
  };

  const onResetForm = () => {
    formik.resetForm({ values: {} });
    setPreviewSrc(null);
  };

  return (
    <PageContentWrapper>
      <>

      <form onSubmit={formik.handleSubmit}>
        <LoadLogoBlock
          previewSrc={previewSrc}
          errorMes={formik.errors.logoImg}
          onChange={onChangeInput}
        />
        <ButtonsBlock onReset={onResetForm}/>
      </form>

      {mutation.isLoading && <BlockFallback />}

      </>
    </PageContentWrapper>
  );
};

export { AdminPartnersLogo };
