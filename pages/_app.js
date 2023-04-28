import '../styles/globals.css'
import {LiffProvider} from "use-line-liff"

function MyApp({ Component, pageProps }) {
  return (
   <LiffProvider liffId={process.env.NEXT_PUBLIC_LIFF_ID} mock={{enable:true}} >
    <Component {...pageProps} />
   </LiffProvider>
  )
}

export default MyApp
