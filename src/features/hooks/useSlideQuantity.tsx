import { useEffect, useState } from "react";

import { useResize } from "./useResize";

interface Props {
  type: "partners" | "news";
}

export const useSlideQuantity = ({ type }: Props) => {
  const [quantity, setQuantity] = useState<number>(0);

  const { size } = useResize();

  useEffect(() => {
    //partners slider
    if ("partners") {
      if (size === "xl") {
        setQuantity((prev) => 5.5);
      } else if (size === "md") {
        setQuantity((prev) => 2.8);
      } else if (size === "sm") {
        setQuantity((prev) => 1.5);
      }
    }

    //news slider
    if ("news") {
      if (size === "xl") {
        setQuantity((prev) => 5.5);
      } else if (size === "md") {
        setQuantity((prev) => 2.8);
      } else if (size === "sm") {
        setQuantity((prev) => 1.5);
      }
    }
  }, [size]);

  return { quantity };
};
