import { atom } from "recoil";

export const searchItem = atom<string>({
  key: "search",
  default: ""
})