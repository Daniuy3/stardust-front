import { create } from "zustand";
import { User, UserCreationData } from "../interfaces";

interface UsersStore {
    users: User[]
    activeUser: UserCreationData | null
    loading: boolean
    modalOpen: boolean
}

interface UsersStoreActions {
    setUsers: (users: User[]) => void
    setActiveUser: (user: UserCreationData | null) => void
    setLoading: (loading: boolean) => void
    setModalOpen: (open: boolean) => void
}

export const useUsersStore = create<UsersStore & UsersStoreActions>()((set) => ({
    users: [],
    activeUser: null,
    loading: false,
    modalOpen: false,
    setUsers: (users: User[]) => set({ users }),
    setActiveUser: (activeUser: UserCreationData | null) => set({ activeUser }),
    setLoading: (loading: boolean) => set({ loading }),
    setModalOpen: (modalOpen: boolean) => set({ modalOpen }),
}))