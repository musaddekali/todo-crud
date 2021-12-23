import SingleTodo from './SingleTodo';
import { useGlobalContext } from '../Context/context'

function TodoList() {
    const { clients, searchText } = useGlobalContext();

    let list = [];

    clients.forEach((client) => {
        const clientString = Object.values(client).join('').toLowerCase();
        if (clientString.indexOf(searchText) === -1) {
            return;
        }
        list.push(
            <SingleTodo key={client.id} client={client} />
        )
    });

    // clients.map((client) => {
    //     const clientString = Object.values(client).join('').toLowerCase();
    //     if (clientString.indexOf(searchText) === -1) {
    //         return;
    //     }
    //     list.push(
    //         <SingleTodo key={client.id} client={client} />
    //     )
    // })

    // clients.filter(client => {
    //     const clientString = Object.values(client).join('').toLowerCase();
    //     if (clientString.indexOf(searchText) === -1) {
    //         return;
    //     }
    //     list.push(
    //         <SingleTodo key={client.id} client={client} />
    //     );
    // });



    return (
        <div className="todo-items">
            {list}
        </div>
    )
}

export default TodoList
