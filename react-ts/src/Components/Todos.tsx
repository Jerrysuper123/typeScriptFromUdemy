
//import and useContext
import React, {useContext} from "react";
import {TodosContext} from "../store/todos-context";
import ListItem from "../Components/ListItem";

//we no longer use props and hence no need to declare its type
const Todos: React.FC=()=>{
    //useContext
    const todosCtx = useContext(TodosContext);
    return(<ul>
        {todosCtx.items.map((item)=>(
        <ListItem key={item.id} text={item.text} toRemoveTodo={todosCtx.removeTodo.bind(null,item.id )}/>
        ))}
    </ul>);
}

export default Todos;