import { create } from "zustand";

interface ModelState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useModel = create<ModelState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));


export const useRegModel = create<ModelState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));



interface UserDetails {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  role: string;
}

interface AuthState {
  user: UserDetails | undefined | null;
  setUser: (user: UserDetails | undefined | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
