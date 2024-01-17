import { CircularProgress } from "@mui/material";

import { FallbackWrap } from "components/commonComponents/Fallback/Falback.styles";

type FallbackProps = {
  blockType?: boolean;
};

export const Fallback = ({ blockType = false }: FallbackProps): JSX.Element => {
  return (
    <FallbackWrap blockType={blockType}>
      <CircularProgress />
    </FallbackWrap>
  );
};
