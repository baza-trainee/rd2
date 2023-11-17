import React from "react";

import {MenuItemsListStyled} from "./MenuItemsList.styled";

const langList: string[] = ["ua", "en", "fr", "de"]

type MenuItemsListProps = {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const MenuItemsList = ({onClick}: MenuItemsListProps) => {

    let disabled;
    return (
        <>
            {
                langList.map((item) => {

                    const disableStatus:boolean = (item === "de") ;

                    return (
                        <MenuItemsListStyled
                            key={item}
                            id={item}
                            onClick={onClick}
                            disabled={disableStatus}
                        >
                            {item}
                        </MenuItemsListStyled>
                    )
                    },
                )
            }
        </>

    )
}

export {MenuItemsList}