import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useGlobalContext } from '../Context/context';

export default function SingleTodo({ client }) {
    const { id, name, email } = client;
    const { removeClient, editClient } = useGlobalContext();
    return (
        <>
            <div className="todo-item">
                <div className="todo-item-inner">
                    <div className="left">
                        <p className="name">{name}</p>
                        <p className="email">{email}</p>
                    </div>
                    <div className="right">
                        <button onClick={() => editClient(id)} className="edit"><FaEdit /></button>
                        <button onClick={() => removeClient(id)} className="remove"><FaTrash /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

