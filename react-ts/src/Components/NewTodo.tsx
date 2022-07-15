import {useRef, useContext} from "react";
import {TodosContext} from "../store/todos-context";

//remove props, as we are using context
const NewTodo:React.FC=()=>{
    //useContext
    const todosCtx = useContext(TodosContext);

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent)=>{
        event.preventDefault();
        const textValue = inputRef.current!.value;

        if(textValue.trim().length===0){
            return;
        }
        //use context instead of props
        todosCtx.addTodo(textValue);
    }

    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="text">input text</label>
            <input type="text" id="text" ref={inputRef}/>
            <button>Submit</button>
        </form>
    )
}

export default NewTodo;