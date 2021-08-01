import React from "react";
import ListItem from "./ListItem";

const List = ({user, list, setList }) => {
    return (
        <div>
            {list && list.map((listItem) => <ListItem user = {user} item={listItem} list={list} setList={setList} />)}
        </div>
    );
};

export default List;