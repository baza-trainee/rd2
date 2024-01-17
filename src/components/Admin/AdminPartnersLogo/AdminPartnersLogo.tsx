import { ChangeEvent, useState } from "react";

import { useFormik } from "formik";
import { useMutation } from "react-query";
import Typography from "@mui/material/Typography";

import { PageContentWrapper } from "components/Admin/PageContentWrapper/PageContentWrapper";
import { validateImage } from "components/Admin/AdminPartnersLogo/loadLogosValidation";
import { LoadLogoBlock } from "components/Admin/AdminPartnersLogo/LoadLogoBlock/LoadLogoBlock";
import { ButtonsBlock } from "components/Admin/AdminPartnersLogo/ButtonsBlock/ButtonsBlock";
import { addLogo } from "api/requests/partnersLogo";
import { loadData } from "api/requests/loadData";
import { Fallback } from "components/commonComponents/Fallback/Fallback";

type FormValues = {
  logoImg?: File;
};

type AdminPartnersLogoProps = {
  openModalError: (text: string) => void;
  openModalSuccess: () => void;
};
export const AdminPartnersLogo = ({
  openModalError,
  openModalSuccess,
}: AdminPartnersLogoProps) => {
  const mutation = useMutation((logo: File) => loadData(addLogo(logo))(), {
    onError: (error) => {
      openModalError(`${error instanceof Error && error.message}`);
    },
    onSuccess: () => {
      openModalSuccess();
      formik.resetForm({ values: {} });
      setPreviewSrc(null);
    },
  });

  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const initialValues: FormValues = {};
  const validate = validateImage;

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: (values) => {
      values.logoImg && mutation.mutate(values.logoImg);
    },
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const loadImg = e.currentTarget.files[0];
      formik.setFieldValue("logoImg", loadImg, true).then(() => {
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

          <Typography marginBottom={5}>
            Зверніть увагу, що після завантаження на сайт логотип буде виглядати саме так,
            як він відобразився на цій сторінці.
          </Typography>

          <ButtonsBlock onReset={onResetForm} />
        </form>

        {mutation.isLoading && <Fallback blockType={true} />}
      </>
    </PageContentWrapper>
  );
};
