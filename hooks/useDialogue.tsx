import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback
} from "react";

export const DialogueContext = createContext({});

export const DialogueContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [activePath, setActivePath] = useState(null);

  const isActiveOption = useCallback((keys) => {
    return activePath?.length && keys.every((key, idx) => {
      return activePath[idx] === key;
    });
  }, [activePath]);

  const value = {
    state,
    setState,
    activePath,
    setActivePath,
    isActiveOption
  }

  return (
    <DialogueContext.Provider value={value}>
      {children}
    </DialogueContext.Provider>
  )
};

export const useDialogue = () => useContext(DialogueContext);

export default useDialogue;
