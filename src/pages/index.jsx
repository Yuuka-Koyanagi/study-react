import { useEffect } from "react";

import { WelcomePage } from "@/components/WelcomePage";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "lightBlue";

    return () => {
      document.body.style.backgroundColor = "";
    }
  }, []);

  return <WelcomePage fileName="index" />;
};
