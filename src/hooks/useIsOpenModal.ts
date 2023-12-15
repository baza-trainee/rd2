import { useState } from "react";

export const useIsOpenModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleIsOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return { isOpenModal, handleIsOpenModal };
};
