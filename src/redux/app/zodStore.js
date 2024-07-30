import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { produce } from "immer";

// Immer middleware
const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);

const useStore = create(
  devtools(
    persist(
      immer((set) => ({
        count: 0,
        activeTabId: 1, // default tab ID
        setActiveTabId: (id) =>
          set((state) => {
            state.activeTabId = id;
          }),
        lastEndpoint: "",
        setLastEndpoint: (endpoint) =>
          set((state) => {
            state.lastEndpoint = endpoint;
          }),
        increase: () =>
          set((state) => {
            state.count += 1;
          }),
        decrease: () =>
          set((state) => {
            state.count -= 1;
          }),
        reset: () => set({ count: 0 }),
      })),
      {
        name: "counter-storage",
        getStorage: () => localStorage,
      }
    )
  )
);

export { useStore };
