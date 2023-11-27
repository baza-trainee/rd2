import React from "react";

import {Box, Button} from "@mui/material";

type ButtonsBlockProps = {
    onReset: () => void
}

const ButtonsBlock = ({onReset}: ButtonsBlockProps) => {

    return (
        <Box display="flex"
             justifyContent="center"
             m={"auto"} gap={3}
        >
            <Button
                variant="contained"
                type="submit"
            >
                Додати
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={onReset}
            >
                Скасувати
            </Button>
        </Box>
    )
}

export {ButtonsBlock}