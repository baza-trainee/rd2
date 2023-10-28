import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "theme/theme";

export const useResize = () => {
  const [size, setSize] = useState<string>("");

  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    if (isXl) {
      setSize((prev) => "xl");
    } else if (isMd) {
      setSize((prev) => "md");
    } else if (isSm) {
      setSize((prev) => "sm");
    }
  }, [isSm, isMd, isXl]);

  return { size };
};
