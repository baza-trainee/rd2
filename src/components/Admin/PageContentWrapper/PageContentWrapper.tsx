import {PropsWithChildren} from "react";

import {Wrapper} from "./PageContentWrapper.styled";

const PageContentWrapper = ({children}: PropsWithChildren) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export {PageContentWrapper}