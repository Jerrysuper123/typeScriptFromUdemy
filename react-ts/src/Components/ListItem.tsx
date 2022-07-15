import "./ListItem.css";

const ListItem: React.FC<{text: string;toRemoveTodo: ()=>void}> = (props)=>{

    // add props.toRemoveTodo, defining it as a void f type, with no parameter

    return(
        <li className="list" onClick={props.toRemoveTodo}>{props.text}</li>
    );
}

export default ListItem;