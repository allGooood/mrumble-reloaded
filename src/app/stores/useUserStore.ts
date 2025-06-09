import { create } from "zustand";
import { User } from "../types/User";

interface UserState{
  user: User | null;
  setUser: (data: User | null) => void;
}

const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (data: User | null) => set({ user: data }),
  }));

export default useUserStore;