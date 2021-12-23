import React from 'react'
import SearchBox from './SearchBox';
import TodoForm from './TodoForm'
import TodoList from './TodoList';


export default function Todo() {
    return (
        <main>
            <div className="container">
                <SearchBox/>
                <TodoForm />
                <TodoList />
            </div>
        </main>
    )
}
