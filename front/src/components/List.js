import React from "react";
import ListItem from "./ListItem";

const List = ({ list, setList }) => {
    return (
        <div>
            {list && list.map((listItem) => <ListItem item={listItem} list={list} setList={setList} />)}
        </div>
    );
};

export default List;