import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import {useQuery} from "react-query";

import {loadData} from "../../../api/loadData";

import {getReportFile} from "../../../api/reports";

import {BASE_URL} from "../../../api/fetcher";

import {Fallback} from "../../commonComponents/Fallback/Fallback";

import {DialogStyled, ErrorBlockStyled, ModalContainer, ModalContent} from "./FooterModal.styled";



interface FooterModalProps {
  filePath: string,
  open: boolean;
  onCloseModal: () => void;
}

export function FooterModal(props: FooterModalProps) {

    const { onCloseModal, open, filePath } = props;

    const {isLoading, isError, isSuccess} = useQuery({
        queryKey: ["rules", filePath],
        queryFn: loadData(getReportFile(filePath)),
        enabled: open,
    } )

  return (
    <DialogStyled onClose={onCloseModal} open={open}>
      <ModalContainer>

        <IconButton aria-label="close" onClick={onCloseModal}>
          <CloseIcon />
        </IconButton>

          <ModalContent>

              {isLoading &&
                  <Fallback blockType={true}/>
              }

              {isError &&
                  <ErrorBlockStyled blockType={true}>
                      При завантаженні документу виникла помилка
                  </ErrorBlockStyled>
              }

              {isSuccess &&
                  <iframe src={BASE_URL + filePath}/>
              }

          </ModalContent>

      </ModalContainer>
    </DialogStyled>
  );
}
