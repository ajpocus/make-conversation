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

  const makeActive = useCallback((path: Path): void => {
    setActivePath(path);
  }, [setActivePath]);

  const isActiveOption = useCallback((path: Path): boolean => {
    return activePath?.length && path.every((key, idx) => {
      return activePath[idx] === key;
    });
  }, [activePath]);

  const addNPC = useCallback(({ name }) => {
    setTree({
      ...tree,
      [name]: {}
    });
  }, [tree, setTree]);

  const value = {
    tree,
    setTree,
    activePath,
    setActivePath,
    activeNPC,
    setActiveNPC,
    makeActive,
    isActiveOption,
    addNPC
  };

  return (
    <DialogueContext.Provider value={value}>
      {children}
    </DialogueContext.Provider>
  )
};

export const useDialogue = () => useContext(DialogueContext);

export default useDialogue;
