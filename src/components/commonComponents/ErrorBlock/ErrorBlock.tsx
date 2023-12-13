import {StyledText} from "./ErrorBlock.styled";

type ErrorBlockProps = {
    blockType: boolean;
    children: string;
}
export const ErrorBlock = ({children, blockType = false}: ErrorBlockProps) => {

    return (
        <StyledText blockType>
            {children}
        </StyledText>
    )
}