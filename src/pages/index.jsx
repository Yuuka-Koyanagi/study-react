import { useEffect } from "react";

import { WelcomePage } from "@/components/WelcomePage";

export default function Home() {
  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightBlue";

    return () => {
      document.body.style.backgroundColor = "";
      console.log("アンマウント時");
    }
  }, []);

  return <WelcomePage fileName="index" />;
};
