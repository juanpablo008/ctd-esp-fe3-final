import { useContext, createContext, useState, useReducer, useEffect } from "react";
import { appReducer } from "../Reducer/AppReducer";

export const AppContext = createContext();

const initialTheme = () => {
    
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        return 'dark'
    }
    return 'light'
}

const initialAppState = {
    dentists: [],
    dentist: {},
    loading: false,
    dentistsFavs: JSON.parse(localStorage.getItem('dentistsFavs')) || [],
    theme: initialTheme()
}

export const Context = ({ children }) => {

    const [appState, dispatch] = useReducer(appReducer, initialAppState);

    const getDentists = async () => {
        dispatch({ type: "SET_LOADING_TRUE" });
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await resp.json();
        dispatch({ type: 'GET_DENTISTS', payload: data });
        setTimeout(() => {
            dispatch({ type: "SET_LOADING_FALSE" });
        }, 1000);
    }

    const getDentist = async (id) => {
        dispatch({ type: "SET_LOADING_TRUE" });
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await resp.json();
        dispatch({ type: 'GET_DENTIST', payload: data });
        dispatch({ type: "SET_LOADING_FALSE" });
    }

    const addFav = (findDentist, dentist) => {
        if (findDentist) {
            dispatch({ type: 'DELETE_DENTIST_FAV', payload: findDentist })
        } else {
            dispatch({ type: 'ADD_DENTIST_FAV', payload: dentist })
        }
    }

    const changeTheme = () => {
        if(appState.theme == 'light'){
            dispatch({type:'CHANGE_THEME','payload':'dark'})
        }else{
            dispatch({type:'CHANGE_THEME','payload':'light'})
        }
    }

    useEffect(() => {
        localStorage.setItem('dentistsFavs', JSON.stringify(appState.dentistsFavs))
    }, [appState.dentistsFavs]);

    useEffect(() => {
        getDentists();
    }, []);

    useEffect(() => {
        if(appState.theme == 'dark'){
            document.querySelector('html').classList.add('dark');
        }else{
            document.querySelector('html').classList.remove('dark');
        }
    }, [appState.theme])
    



    return (
        <AppContext.Provider value={{
            ...appState,
            getDentist,
            addFav,
            changeTheme
        }}>
            {children}
        </AppContext.Provider>
    )

}


export const useAppContext = () => useContext(AppContext);