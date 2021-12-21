import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const storageKey = 'clients';

const AppProvider = ({ children }) => {
    const [clients, setClients] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editableItem, setEditableItem] = useState(null);
    // add new item 
    const addNewClient = (newClient) => {
        if (isEdit) {
            const updatedClients = clients.map((item) => {
                if (item.id === editableItem.id) {
                    return {...item, name: newClient.name, email: newClient.email}
                }
                return item;
            });
            setClients(updatedClients);
            localStorage.setItem(storageKey, JSON.stringify(updatedClients));
            setIsEdit(false);

        } else {
            setClients([newClient, ...clients]);
            localStorage.setItem(storageKey, JSON.stringify([newClient, ...clients]));
            setIsEdit(false);
        }
    }
    // delete item
    const removeClient = (id) => {
        const remainClients = clients.filter((item) => item.id !== id);
        setClients(remainClients);
        localStorage.setItem(storageKey, JSON.stringify(remainClients));
    }

    // edit client  
    const editClient = (id) => {
        setEditableItem(clients.find(item => item.id === id));
        setIsEdit(true);
    }

    useEffect(() => {
        // retrieve Data from localStorage and set in the 'clients' state
        const retrieveData = () => {
            const clients = JSON.parse(localStorage.getItem(storageKey));
            if (clients) setClients(clients);
        }
        retrieveData();
    }, []);

    return (
        <AppContext.Provider
            value={{
                clients,
                addNewClient,
                removeClient,
                isEdit,
                editClient,
                editableItem,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

// custom hook 
export const useGlobalContext = () => {
    return (
        useContext(AppContext)
    )
}

export { AppContext, AppProvider };
