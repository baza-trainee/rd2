import {PartnersLogos, ResponseLogos} from "../types/typePartnersLogos";

import {BASE_URL} from "../api/fetcher";


const imgPath = BASE_URL + "/api/logo/logos/";
export const mapPartnersLogos = (logosArr: ResponseLogos[]) => {

    const logosArrNew:PartnersLogos[] = logosArr.map(logoData =>(
        {
            id: logoData.id.toString(),
            src: imgPath + logoData.path,
        }
    ))

    return logosArrNew;
}