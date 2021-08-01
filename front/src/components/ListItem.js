import React from 'react';
import { IoMdTrash } from 'react-icons/io'
import './ListItem.css'
import axios from 'axios';

const ListItem = ({item, list, setList, user}) => {
    
    // const currentItem = item.item;
    const deleteItem = () => {
        let id = item.id;
        let updatedList = list.filter((listItem) => listItem.id !== id);
        setList(updatedList);
        var dbList =[];
        for(var i = 0; i < updatedList.length; i++){
            dbList[i] = updatedList[i]["title"]
        }
        updateList(dbList)
    }

    async function updateList(updatedList){
        var url = 'http://localhost:4000/changelist';
        const res = await axios.post(url, { username: user, list: updatedList});
    }
    return (
        <div className="ListItem" key={item.id}>
            <p>{item.title}</p>
            <IoMdTrash className="Trash" onClick={deleteItem} />
        </div >
    );
}

export default ListItem;