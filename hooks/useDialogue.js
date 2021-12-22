import { createContext, useContext, useEffect, useState } from "react";

export const DialogueContext = createContext({});

export const DialogueContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [activeOption, setActiveOption] = useState(null);

  const value = {
    state,
    setState,
    activeOption,
    setActiveOption
  }

  return (
    <DialogueContext.Provider value={value}>
      {children}
    </DialogueContext.Provider>
  )
};

export const useDialogue = () => useContext(DialogueContext);

export default useDialogue;
