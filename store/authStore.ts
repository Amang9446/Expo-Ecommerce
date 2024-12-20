import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from "@react-native-async-storage/async-storage";
export const useAuth: any = create(persist((set) => ({
    user: null,
    token: null,
    setUser: (user: any) => set({ user }),
    setToken: (token: string) => set({ token })
}), {
    name: 'auth-store',
    storage: createJSONStorage(() => AsyncStorage)
}))