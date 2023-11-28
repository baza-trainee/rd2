import React, {useRef} from "react";

import {Transition} from "react-transition-group";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import {ErrorBlock,
    InputStyled,
    LabelStyled,
    LoadedImg,
    LoadFieldWrapper,
} from "components/Admin/AdminPartnersLogo/LoadLogoBlock/LoadLogoBlock.styled";

type LoadLogoBlockProps = {
    previewSrc: string | null;
    errorMes?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const LoadLogoBlock = (props: LoadLogoBlockProps) => {

    const {previewSrc, errorMes, onChange} = props;

    const labelRef = useRef(null);
    const imageRef = useRef(null);

    return (
        <LoadFieldWrapper>

            <Transition
                nodeRef={labelRef}
                in={Boolean(!previewSrc)}
                timeout={500}
                mountOnEnter
                unmountOnExit
            >
                {state => (

                    <LabelStyled
                        htmlFor="logoImg"
                        className={`${state} ${errorMes ? "error" : "" }`}>
                        <AddCircleIcon color="primary" />
                        <span>Додати лого</span>
                    </LabelStyled>

                )}
            </Transition>

            <Transition
                nodeRef={imageRef}
                in={Boolean(previewSrc)}
                timeout={1000}
                mountOnEnter
                unmountOnExit
            >
                {state => (


                    <LoadedImg
                        src={previewSrc ? previewSrc : "" }
                        alt="partnersLogo"
                        className={state}
                    />
                )}
            </Transition>

            <InputStyled
                type="file"
                accept=".jpg, .png, .webp, .svg"
                id="logoImg"
                name="logoImg"
                onChange={onChange}
            />

            {errorMes
                ? <ErrorBlock>{errorMes}</ErrorBlock>
                : null
            }

        </LoadFieldWrapper>
    )
}

export {LoadLogoBlock}