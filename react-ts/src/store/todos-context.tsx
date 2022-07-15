import React,{createContext, useState} from "react";
import Todo from "../Models/todo";

//use type alias to avoid repeated typing
type TodoContextType = {
    items: Todo[];
    addTodo: (text: string)=> void;
    removeTodo: (id: string)=>void;
}

//export context as well
//TodosContext is a global variable to be accessed by different components
export const TodosContext = createContext<TodoContextType>({
    items:[],
    addTodo:()=>{},
    removeTodo:(id: string)=>{}
})


//context provider is to manage the state of the TodosContext
//need to given children to props 
const TodosContextProvider: React.FC<{children: any}> = (props)=>{
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler=(text: string)=>{
    const todo = new Todo(text);
    setTodos((prevState)=>{
      return prevState.concat(todo);
    })
  }

  const deleteTodoHander = (id: string)=>{
    setTodos((prevState)=>{
      return prevState.filter(t=>t.id!==id);
    })
  }

  const contextValue:TodoContextType = {
      items: todos,
    //   addTodo below does not have argument when defined
      addTodo: addTodoHandler,
    removeTodo: deleteTodoHander
  }

    return<TodosContext.Provider value={contextValue}>
        {/* children meaning whatever we are wrapping them with this context */}
        {props.children}
    </TodosContext.Provider>;
}

export default TodosContextProvider;