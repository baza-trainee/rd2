import Typography from "@mui/material/Typography";

import {TextLogo} from "./Logo.styled";

export const Logo = () => {
    return (

            <TextLogo href="#">
                <Typography variant="h6"
                            component="h6"

                >
                    НАН України
                </Typography>
                <p>ДП НДЦ  проблем надрокористування «Георесурс»</p>
            </TextLogo>
    )
}
