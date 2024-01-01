import { createContext } from "react";

const UserContenxt = createContext(
    {
        loggedInUser:"Default User"
    }
);
export default UserContenxt
