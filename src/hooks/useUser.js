/* 
    Custom hook to keep track of which user is currently logged in. Allows the components in the app to get immediate access to the currently logged in user

    Custom hooks in react are essentially functions that have hooks inside of them
*/
import { useState, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => {
            setUser(user);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    // returning user and isLoading so that the component that uses this custom hook can use them
    return { user, isLoading };
}

export default useUser;