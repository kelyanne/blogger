import { create } from "zustand";

export interface ArticleItem {
  id: number;
  title: string;
  text?: string;
  author?: string;
  category?: string;
}

interface Actions {
  setId: (id: number) => void;
  setTitle: (title: string) => void;
  setText: (title: string) => void;
  setAuthor: (title: string) => void;
  setCategory: (title: string) => void;
  articles: ArticleItem[];
  addNewArticle: (newArticle: ArticleItem) => void;
  clearInputs: () => void;
}

export const useStore = create<ArticleItem & Actions>((set) => ({
  id: 1,
  title: "",
  text: "",
  author: "",
  category: "",
  setId: () => set((state) => ({ id: state.id + 1 })),
  setTitle: (title) => set({ title }),
  setText: (text) => set({ text }),
  setAuthor: (author) => set({ author }),
  setCategory: (category) => set({ category }),
  articles: [],
  addNewArticle: (newArticle) =>
    set((state) => ({ articles: [...state.articles, newArticle] })),
  clearInputs: () => set({ title: "", text: "", author: "", category: "" }),
}));
