import {AxiosResponse} from "axios";

//export type LoadFileFunction = {
    //()=>
//}
function LoadFileFunction() {}

export type Rules = {
    id: string;
    descKey: string;
    filePath: string;
}

export interface ITextContact {
    id: string;
    icon: string;
    alt: string;
    desc: string;
    type: string
}

export interface ILinkContact extends ITextContact {
    href: string;
}

export interface ITranslatedContact extends Omit<ILinkContact, "desc"> {
    descKey: string;
}

export type Contacts =
 | ITextContact
 | ILinkContact
 | ITranslatedContact

export type Logo = {
	src: string;
	alt: string;
}