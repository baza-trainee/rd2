/* eslint-disable max-len */
import { MouseEvent } from "react";

import { MenuItemsListStyled } from "components/Header/LanguageMenu/MenuItemsList/MenuItemsList.styled";

const langList: string[] = ["ua", "en", "fr", "de"];

type MenuItemsListProps = {
  onClick: (e: MouseEvent<HTMLElement>) => void;
};

export const MenuItemsList = ({ onClick }: MenuItemsListProps) => {
  return (
    <>
      {langList.map((item) => {
        const disableStatus: boolean = item === "de";

        return (
          <MenuItemsListStyled
            key={item}
            id={item}
            onClick={onClick}
            disabled={disableStatus}
          >
            {item}
          </MenuItemsListStyled>
        );
      })}
    </>
  );
};
