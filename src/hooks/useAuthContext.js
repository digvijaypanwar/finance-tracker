import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext();

    if (context) {
        throw new Error("useAuthContext must be inside an AuthContextProvider");
    }

    return context;
};
