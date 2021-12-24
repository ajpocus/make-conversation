import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback
} from "react";

import "~/types"

const initialTree: DialogueTree = {};
const initialActivePath: Path = [];

export const DialogueContext = createContext({...initialTree });

export const DialogueContextProvider = ({ children }) => {
  const [tree, setTree] = useState({ ...initialTree });
  const [activePath, setActivePath] = useState([...initialActivePath]);
  const [activeNPC, setActiveNPC] = useState(null);

  const makeActive = useCallback((keys: Path): void => {
    setActivePath(keys);
  }, [setActivePath]);

  const isActiveOption = useCallback((keys: Path): boolean => {
    return activePath?.length && keys.every((key, idx) => {
      return activePath[idx] === key;
    });
  }, [activePath]);

  const value = {
    tree,
    setTree,
    activePath,
    setActivePath,
    activeNPC,
    setActiveNPC,
    makeActive,
    isActiveOption
  };

  return (
    <DialogueContext.Provider value={value}>
      {children}
    </DialogueContext.Provider>
  )
};

export const useDialogue = () => useContext(DialogueContext);

export default useDialogue;
