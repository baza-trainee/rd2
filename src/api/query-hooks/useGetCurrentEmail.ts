import { useQuery } from "react-query";

import { getCurrentEmail } from "api/requests/getCurrentEmail";
import { loadData } from "api/requests/loadData";

export const useGetCurrentEmail = () =>
  useQuery({
    queryKey: "email",
    queryFn: loadData(getCurrentEmail),
  });
