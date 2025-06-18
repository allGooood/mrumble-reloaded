import { create } from "zustand";
import { User } from "../types/User";

interface UserState{
  user: User | null;
  setUser: (data: User | null) => void;
  // userId: number | undefined;
  // setUserId: (data: number) => void;
}

const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (data: User | null) => set({ user: data }),
    // userId: undefined,
    // setUserId: (data: number) => set({userId: data}),
  }));

export default useUserStore;