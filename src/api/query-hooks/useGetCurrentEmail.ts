import { useQuery } from "react-query";

import { getCurrentEmail } from "api/getCurrentEmail";
import { loadData } from "api/loadData";

export const useGetCurrentEmail = () =>
  useQuery({
    queryKey: "email",
    queryFn: loadData(getCurrentEmail),
  });
