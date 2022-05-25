import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "book", // configuration stay the same too
  storage: localStorage,
});

const books = atom({
  key: "books-favorites",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export { books };
