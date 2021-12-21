import { createContext, useContext, useEffect, useState } from "react";

export const DialogueContext = createContext({});

export const DialogueContextProvider = ({ children }) => {
  const [state, setState] = useState({});

  const value = {
    state,
    setState
  }

  return (
    <DialogueContext.Provider value={value}>
      {children}
    </DialogueContext.Provider>
  )
};

export const useDialogue = () => useContext(DialogueContext);

export default useDialogue;
