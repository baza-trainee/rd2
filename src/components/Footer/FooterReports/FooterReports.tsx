import React, {useState} from "react";

import {useTranslation} from "react-i18next";

import {rulesList} from "../footerList";

import {RulesItem, RulesList} from "../Footer.styled";
import {FooterModal} from "../FooterModal/FooterModal";
import {useIsOpenModal} from "../../../hooks/useIsOpenModal";

const FooterReports = () => {

    const { t } = useTranslation();

    const {isOpenModal, handleIsOpenModal} = useIsOpenModal();

    const [loadFilePath, setLoadFilePath] = useState("");

    const openRule = (filePath:string) => {
        return ()=> {
            setLoadFilePath(filePath);
            handleIsOpenModal();
        }
    }

    return (
        <>
            <RulesList>
                {rulesList.map(({ id, descKey, filePath}) => (
                    <RulesItem key={id} onClick={openRule(filePath)}>
                        {t(descKey)}
                    </RulesItem>
                ))}
            </RulesList>
            <FooterModal
                filePath={loadFilePath}
                onCloseModal={handleIsOpenModal}
                open={isOpenModal}
            />
        </>
    )

}

export {FooterReports}