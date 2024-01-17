import { useState } from "react";

import { useTranslation } from "react-i18next";

import { rulesList } from "components/Footer/footerList";
import { FooterModal } from "components/Footer/FooterModal/FooterModal";
import { useIsOpenModal } from "hooks/useIsOpenModal";

import {
  RulesItem,
  RulesList,
} from "components/Footer/FooterReports/FooterReports.styled";

export const FooterReports = () => {
  const { t } = useTranslation();

  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  const [loadFilePath, setLoadFilePath] = useState("");

  const openRule = (filePath: string) => {
    return () => {
      setLoadFilePath(filePath);
      handleIsOpenModal();
    };
  };

  return (
    <>
      <RulesList>
        {rulesList.map(({ id, descKey, filePath }) => (
          <RulesItem key={id} onClick={openRule(filePath)}>
            <span>{t(descKey)}</span>
          </RulesItem>
        ))}
      </RulesList>
      <FooterModal
        filePath={loadFilePath}
        onCloseModal={handleIsOpenModal}
        open={isOpenModal}
      />
    </>
  );
};
