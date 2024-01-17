import { ChangeEvent } from "react";

import DownloadIcon from "@mui/icons-material/Download";

import {
  ErrorBlock,
  InputStyled,
  LabelStyled,
  LoadFieldWrapper,
} from "components/Admin/AdminReports/LoadReportBlock/LoadReportBlock.styled";

type LoadReportBlockProps = {
  id: string;
  fileName: string | null;
  errorMes?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const LoadReportBlock = (props: LoadReportBlockProps) => {
  const { id, fileName, errorMes, onChange } = props;

  return (
    <LoadFieldWrapper>
      <LabelStyled htmlFor={id}>
        {fileName ? (
          <span>{fileName}</span>
        ) : (
          <>
            <span>Обрати файл у форматі pdf</span>
            <DownloadIcon color="primary" />
          </>
        )}
      </LabelStyled>

      <InputStyled
        type="file"
        accept=".pdf"
        id={id}
        name="reportFile"
        value={""}
        onChange={onChange}
      />

      {errorMes ? <ErrorBlock>{errorMes}</ErrorBlock> : null}
    </LoadFieldWrapper>
  );
};
