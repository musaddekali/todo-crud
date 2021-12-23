import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../Context/context";

function SearchBox() {
    const { handleSearchTextChange, searchText } = useGlobalContext();

    return (
        <div className="d-flex align-items-center">
            <span><FaSearch /> </span>
            <input
                onChange={(e) => handleSearchTextChange(e.target.value)}
                type="text"
                placeholder="Search..."
                value={searchText}
                className="todo-input mt-3 ms-3"
            />
        </div>
    )
}

export default SearchBox;
