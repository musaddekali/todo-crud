import React from 'react'
import SingleTodo from './SingleTodo'
import TodoForm from './TodoForm'
// import { fakeData } from '../FakeData/FakeData';
import { useGlobalContext } from '../context'

export default function Todo() {
    const {clients} = useGlobalContext();
  
    return (
        <main>
            <div className="container">
            <TodoForm />
                <div className="todo-items">
                    {
                        clients.map((client) => {
                           return <SingleTodo key={client.id} client={client}/>
                        })
                    }
            </div>
            </div>
        </main>
    )
}
