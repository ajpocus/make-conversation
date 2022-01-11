import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback
} from "react";
import cuid from "cuid";

import "~/types";

const initialNPCs: NPCList = {};

export const DialogueContext = createContext({ ...initialNPCs });

export const DialogueContextProvider = ({ children }) => {
  const [NPCs, setNPCs] = useState({ ...initialNPCs });
  const [options, setOptions] = useState({});
  const [activeNPC, setActiveNPC] = useState(null);
  const [activeOption, setActiveOption] = useState(null);

  const addNPC = useCallback(({ name }) => {
    const id = cuid();

    setNPCs({
      ...NPCs,
      [id]: { id, name }
    });
  }, [NPCs, setNPCs]);

  const addOption = useCallback(({ parentID, text }) => {
    let NPCCopy = { ...NPCs };
    const id = cuid();
    NPCCopy[activeNPC][parent] = { id, text };
    setNPCs(NPCCopy);
  }, [NPCs, setNPCs, activeNPC])

  const value = {
    NPCs,
    setNPCs,
    activeNPC,
    options,
    setOptions,
    setActiveNPC,
    activeOption,
    setActiveOption,
    addNPC,
    addOption
  };

  return (
    <DialogueContext.Provider value={value}>
      {children}
    </DialogueContext.Provider>
  )
};

export const useDialogue = () => useContext(DialogueContext);

export default useDialogue;
