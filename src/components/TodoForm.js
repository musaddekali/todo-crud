import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../Context/context';

const initialState = {
    name: '',
    email: '',
};

export default function TodoForm() {
    const [client, setClient] = useState(initialState);
    const { addNewClient,editableItem, isEdit } = useGlobalContext();

    const handleClientData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setClient({ ...client, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewClient(client);
        setClient(initialState);
    }


    useEffect(() => {
        if (isEdit) {
            setClient({ name: editableItem.name, email: editableItem.email })
        };
    },[isEdit,editableItem]);


    const { name, email } = client;

    return (
        <form onSubmit={handleSubmit} className="todo-form shadow">
            <input
                onChange={handleClientData}
                type="text"
                name="name"
                value={name}
                className="todo-input"
                placeholder="Name"
            />
            <input
                onChange={handleClientData}
                type="email"
                name="email"
                value={email}
                className="todo-input"
                placeholder="Email"
            />
            <input
                type="submit"
                value={`${!isEdit ? 'Add' : 'Update'}`}
                className="todo-submit-btn"
            />
        </form>
    )
}
