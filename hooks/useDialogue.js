import { createContext, useContext, useEffect, useState } from "react";

export const DialogueContext = createContext({});

export const DialogueContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [activePath, setActivePath] = useState(null);

  const isActiveOption = useCallback((keys) => {
    return keys.every((key, idx) => {
      return activePath[idx] === key;
    });
  }, [activePath]);

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
