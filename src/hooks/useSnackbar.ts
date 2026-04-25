


import { create } from "zustand";

interface SnackBarStore {
    message: string;
    show: boolean;
    type: "success" | "error" | "info" | "warning";
}


interface SnackBarActions {
    setMessage: (message: string) => void;
    setShow: (show: boolean) => void;
    setType: (type: "success" | "error" | "info" | "warning") => void;
    reset: () => void;

    showSnackBar: (message: string, type?: "success" | "error" | "info" | "warning") => void;
}

export const useSnackBarStore = create<SnackBarStore & SnackBarActions>()((set) => ({
    message: "",
    show: false,
    type: "info",

    setMessage: (message) => set({ message }),
    setShow: (show) => set({ show }),
    setType: (type) => set({ type }),
    reset: () => set({ message: "", show: false, type: "info" }),
    showSnackBar: (message, type = "info") => set((state) => ({
        ...state,
        message,
        type,
        show: true,
    }))
}))     