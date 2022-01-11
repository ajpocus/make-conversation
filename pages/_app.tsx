import { AppProps } from "next/app";

import { DialogueContextProvider } from "~/hooks/useDialogue";
import "normalize.css";
import "~/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DialogueContextProvider>
      <Component {...pageProps} />
    </DialogueContextProvider>
  );
}

export default MyApp;
