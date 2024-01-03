import { createContext } from "react";

const UserContenxt = createContext(
    {
        loggedInUser:null,
        email:"abcd@gmail.com"
    }
);
export default UserContenxt
