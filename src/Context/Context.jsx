import { useContext, createContext, useState, useReducer, useEffect } from "react";

export const AppContext = createContext();

const initDentistsFavs = JSON.parse(localStorage.getItem('dentistsFavs')) || [];

export const Context = ({ children }) => {


    const [dentists, setDentists] = useState([]);
    const [dentistsFavs, setDentistsFavs] = useState(initDentistsFavs)
    const [dentist, setDentist] = useState({});

    const [loading, setLoading] = useState(false);

    const getDentists = async () => {
        setLoading(true);
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await resp.json();
        setDentists(data);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }

    useEffect(() => {
        getDentists();
    }, []);
    
    const getDentist = async (id) => {
        setLoading(true);
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await resp.json();
        setDentist(data);
        setLoading(false);
    }


    return (
        <AppContext.Provider value={{ 
            dentists, 
            loading,
            getDentist,
            dentist
         }}>
            { children }
        </AppContext.Provider>
    )

}


export const useAppContext = () => useContext(AppContext);