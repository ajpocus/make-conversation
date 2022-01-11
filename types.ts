export type Path = Array<string>;
export type OptionID = string;
export type NPCID = string;

export type NPCList = {
  [key: NPCID]: NPC
};

export type NPC = {
  id: NPCID,
  name: string,
  options: Array<OptionId>
};

export type OptionList = {
  [key: OptionID]: Option
};

export type Option = {
  id: OptionID,
  text: string,
  responses: Array<OptionID> 
};
