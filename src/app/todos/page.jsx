"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addTodo, getTodos } from "../utils/api";

// import { getTodos } from "../utils/api";

const Todos =  () => {
  const queryClient= useQueryClient();
  const [title, setTitle] = useState("");

  const {data: todos = [], isLoading} = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    
   
    staleTime: 5000,
    retry: 2,
    enabled: true,
  });

  const {mutateAsync: addTodoMutation} = useMutation({
    mutationFn: addTodo,
    onSuccess: ()=> queryClient.invalidateQueries(["todos"])
  });

  if(isLoading) return <h3 className="text-2xl text-center loading"></h3>;


  const handleAdd =async ()=>{
    await addTodoMutation(title);
    setTitle("")
  }

  return (
    <div className="max-w-xl mx-auto min-h-screen">
      <div className="fieldset flex justify-center mb-10 items-center">
        <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} className="input" placeholder="tile" />
        <button className="btn " onClick={handleAdd}>Add</button>
      </div> 
      <h3 className="text-2xl pb-6">Total task: {todos.length}</h3>
   
      <div className="text-left ">
        {
          todos.map((todo)=> <li className="text-xl" key={todo.id}>{todo.title}</li>)
        }
       
      </div>
    </div>
  );
};

export default Todos;
