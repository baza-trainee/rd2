import { useQuery } from "react-query";

import { getCurrentPhoneNumber } from "api/requests/getCurrentPhoneNumber";
import { loadData } from "api/requests/loadData";

export const useGetCurrentPhone = () =>
  useQuery({
    queryKey: "phone",
    queryFn: loadData(getCurrentPhoneNumber),
  });
