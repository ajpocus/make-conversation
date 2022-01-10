export type Path = Array<string>;
export type OptionID = string;
export type NPCID = string;

export type NPCList = {
  [key: NPCID]: NPC
};

export type NPC = {
  [key: OptionID]: Option
};

export type Option = {
  id: OptionID,
  text: string,
  response: Array<OptionID> 
};
