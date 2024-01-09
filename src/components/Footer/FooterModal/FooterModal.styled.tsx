import styled from "@emotion/styled";

import {Dialog} from "@mui/material";

import {theme} from "../../../theme/theme";
import {ErrorBlock} from "../../commonComponents/ErrorBlock/ErrorBlock";

const closeButtonColor = theme.palette.secondary.main;

const DialogStyled = styled(Dialog)`
    max-height: 700px;
    
    .MuiPaper-root {
        max-width: 850px;
        max-height: calc(100% - 100px);
        height: 100%;
        overflow-y: visible;
    }

    @media (min-width: 768px) {
        & {
            max-height: 1100px;
        }
    }
`;

const ModalContainer = styled.div`
    width: 350px;
    height: 100%;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    button {
        position: absolute;
        top: -35px;
        right: -8px;;
        color: ${closeButtonColor}
    }

    @media (min-width: 468px) {
        & {
            width: 430px;
        }
    }

    @media (min-width: 768px) {
        & {
            width: 700px;
        }
    }

    @media (min-width: 1280px) {
        & {
            width: 850px;
        }
    }
`;
const ModalContent = styled.div`
  width: 100%;
  height: 100%;
    
    iframe {
        display: block;
        width: 350px;
        height: 100%;
        border: none;
        border-radius: 4px;
    }

    embed {
        top: -60px;
    }

    @media (min-width: 468px) {
        iframe {
            width: 430px;
        }
    }

    @media (min-width: 768px) {
        iframe {
            width: 700px;
        }
    }

    @media (min-width: 1280px) {
        iframe {
            width: 850px;
        }
    }
`;

const ErrorBlockStyled = styled(ErrorBlock)`
    margin-top: 150px;
    text-align: center;
`;

export {ModalContainer, ModalContent, DialogStyled, ErrorBlockStyled}
