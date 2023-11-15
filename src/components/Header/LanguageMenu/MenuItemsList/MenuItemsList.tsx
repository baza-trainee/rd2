import React from "react";

import {MenuItemsListStyled} from "./MenuItemsList.styled";

const langList: string[] = ["ua", "en", "fr", "de"]

type MenuItemsListProps = {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const MenuItemsList = ({onClick}: MenuItemsListProps) => {

    return (
        <>
            {
                langList.map((item) => (
                    <MenuItemsListStyled
                        key={item}
                        id={item}
                        onClick={onClick}
                    >
                        {item}
                    </MenuItemsListStyled>
                ))
            }
        </>

    )
}

export {MenuItemsList}