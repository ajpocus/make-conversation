export type DialogueTree = {
  [npc: string]: Options
};

export type Options = {
  [optionKey: string]: Option
};

export type Option = {
  text: string,
  response: Response
};

export type Response = {
  responseType: ResponseType,
  text: string,
  data: object,
  options: Options
};

export type ResponseType = "text" | "item" | "quest";

export type Path = Array<string>;
