import EmptyToDoList from '../EmptyToDoList/EmptyToDoList';
import ListItem from '../ListItem/ListItem';
import './list.scss';

const List = ({todos, onDelete}) => {
    return (
        <div className="list">
            {
                todos.length ? todos.map((itemData) => <ListItem key={itemData.id} itemData={itemData} onDelete={onDelete}/>) : <EmptyToDoList />
            }
        </div>
    )
}

export default List;