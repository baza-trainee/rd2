import {useQuery} from "react-query";

import { getCurrentEmail } from "api/requests/getCurrentEmail";
import { loadData } from "api/requests/loadData";

export const useGetCurrentEmail = (cash: boolean) =>
  useQuery({
    queryKey: "email",
    queryFn: loadData(getCurrentEmail),
    enabled: cash,
  });