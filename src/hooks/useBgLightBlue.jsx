import { usePathname } from "next/navigation";

import { useEffect } from "react";

export const useBgColor = () => {
  const pagePath = usePathname();

  useEffect(() => {
    document.body.style.backgroundColor = pagePath === "/" ? "lightblue" : "beige";

    return () => document.body.style.backgroundColor = "";
  }, [pagePath]);
};
