import { useQuery } from "react-query";

import { getCurrentPhoneNumber } from "api/getCurrentPhoneNumber";
import { loadData } from "api/loadData";

export const useGetCurrentPhone = () =>
  useQuery({
    queryKey: "phone",
    queryFn: loadData(getCurrentPhoneNumber),
  });
