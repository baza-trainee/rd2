import {AxiosResponse} from "axios";

import {addPrivatePolicy, addReport, addTermsUse} from "../../../api/reports";

type reportItem = {
  reportName: string;
  reportFunc: (data: File) => () => Promise<AxiosResponse<any, any>>;
}

export const reportsList: reportItem[] = [
  {reportName: "Політика конфіденційності",
   reportFunc: addPrivatePolicy,
  },
  {reportName: "Правила користування сайтом",
   reportFunc: addTermsUse,
  },
  {reportName: "Звітність організації",
   reportFunc: addReport,
  },
]