import { create } from "zustand";
import { User } from "../interfaces";

interface UsersStore {
    users: User[]
    loading: boolean
}

interface UsersStoreActions {
    setUsers: (users: User[]) => void
    setLoading: (loading: boolean) => void
}

export const useUsersStore = create<UsersStore & UsersStoreActions>()((set) => ({
    users: [],
    loading: false,
    setUsers: (users: User[]) => set({ users }),
    setLoading: (loading: boolean) => set({ loading }),
}))