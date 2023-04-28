
import '../styles/globals.css'

import {useState, useEffect} from "react"

function MyApp({ Component, pageProps }) {
  const [liffObject, setLiffObject] = useState(null);
  const [liffError, setLiffError] = useState(null);

  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff").then((liff) => {
      const liffInstance = liff.init ? liff : liff.default;
      console.log("start liff.init()...");
      liffInstance
        .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID })
        .then(() => {
          console.log("liff.init() done");
          setLiffObject(liffInstance);
        })
        .catch((error) => {
          console.log(`liff.init() failed: ${error}`);
          if (!process.env.NEXT_PUBLIC_LIFF_ID) {
            console.info(
              "LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable."
            );
          }
          setLiffError(error.toString());
        });
    });
  }, []);

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
