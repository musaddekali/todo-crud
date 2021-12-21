import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';

const initialState = {
    name: '',
    email: '',
};

export default function TodoForm() {
    const [client, setClient] = useState(initialState);
    const { addNewClient, isEdit, editableItem } = useGlobalContext();

    const handleClientData = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setClient({ ...client, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            addNewClient(client);
            setClient(initialState);
            console.log('this submit for update');
        } else {
            const newClient = {
                id: Date.now(),
                ...client,
            }
            addNewClient(newClient);
            setClient(initialState);
            console.log('this submit for new add');
        }
    }
    
   
        useEffect(() => {
            if(isEdit) setClient({ name: editableItem.name, email: editableItem.email });
        }, [editableItem]);
    

    const { name, email } = client;

    return (
        <form onSubmit={handleSubmit} className="todo-form shadow" action="#">
            <input onChange={handleClientData} type="text" name="name" value={name} className="todo-input" placeholder="Name" />
            <input onChange={handleClientData} type="email" name="email" value={email} className="todo-input" placeholder="Email" />
            {!isEdit ? <input type="submit" value="Add" className="todo-submit-btn" /> : <input type="submit" value="Update" className="todo-submit-btn todo-update-btn" />}
        </form>
    )
}
