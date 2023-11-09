import React from "react";

import {AddressItem} from "./ContactItem.styled";

type ContactItemProps = {
    icon: string;
    alt: string;
    desc: string
}

const ContactItem = ( {icon,alt,desc}: ContactItemProps) => {
    return (
        <AddressItem >
            <img src={icon} width={24} height={24} alt={alt} />
            <span>{desc}</span>
        </AddressItem>
    )
}

export {ContactItem}