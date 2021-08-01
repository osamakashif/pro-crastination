import React from 'react';
import { IoMdTrash } from 'react-icons/io'
import './ListItem.css'

const ListItem = ({ item, list, setList }) => {

    const deleteItem = () => {
        let id = item.id;
        let updatedList = list.filter((listItem) => listItem.id !== id);
        setList(updatedList);
    }
    return (
        <div className="ListItem" key={item.id}>
            <p>{item.title}</p>
            <IoMdTrash className="Trash" onClick={deleteItem} />
        </div >
    );
}

export default ListItem;