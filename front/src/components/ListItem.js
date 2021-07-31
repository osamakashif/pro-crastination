import React from 'react';
import { IoMdTrash } from 'react-icons/io'
import './ListItem.css'

const ListItem = ({ item = "" }) => {
    return (
        <div className="ListItem">
            <p>{item}</p>
            <IoMdTrash className="Trash" />
            {/* <p>{item}&#160;&#160;&#160;&#160;<IoMdTrash className="Trash"/> </p>  */}

            {/* &#160; or &nbsp; are non-breakable spaces as HTML is whitespace collapsible. 4 used to act like a tab. */}
        </div >
    );
}

export default ListItem;