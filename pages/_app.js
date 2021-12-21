import { DialogueContextProvider } from "~/hooks/useDialogue"
import "~/styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <DialogueContextProvider>
      <Component {...pageProps} />
    </DialogueContextProvider>
  );
}

export default MyApp
