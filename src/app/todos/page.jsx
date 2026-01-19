"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addTodo, deleteTodo, getTodos, getAllPayments } from "../utils/api";

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


//   const {data: payments = [] , isPending: isPaymentLoading} = useQuery({
//     queryKey: ["payments"],
//     queryFn: getAllPayments,
//     staleTime: 5000,
//     retry: 2,
//     enabled: true,
//   })

// console.log("payment", payments)

  const {mutateAsync: addTodoMutation} = useMutation({
    mutationFn: addTodo,
    onSuccess: ()=> queryClient.invalidateQueries(["todos"])
  });

  const {mutateAsync: deleteTodoMutation} = useMutation({
    mutationFn: deleteTodo,
    onSuccess: ()=> queryClient.invalidateQueries(["todos"])
  });

  if(isLoading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="glass-card p-8">
        <div className="loading loading-spinner loading-lg"></div>
        <p className="mt-4 text-xl">Loading todos...</p>
      </div>
    </div>
  );

  const handleAdd =async ()=>{
    if(title.trim()) {
      await addTodoMutation(title);
      setTitle("")
    }
  }

  const handleDelete = async (id) => {
    await deleteTodoMutation(id);
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold gradient-text mb-4">Todo Manager</h1>
        <p className="text-xl opacity-90">Stay organized with {todos.length} tasks</p>
        <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="glass-card p-8 mb-8">
        <div className="flex gap-4 items-center">
          <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={(e)=> setTitle(e.target.value)} 
            className="input input-bordered flex-1 bg-white/10 border-violet-200/20 text-white placeholder-violet-200/70" 
            placeholder="Add a new task..." 
            onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          />
          <button className="btn btn-gradient px-8" onClick={handleAdd}>
            ✨ Add Task
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {todos.map((todo, index) => (
          <div key={todo.id} className="glass-card p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <p className="text-lg flex-1">{todo.title}</p>
              <div className="flex gap-2">
                {/* <button className="btn btn-sm btn-success">✓</button> */}
                <button className="btn btn-sm btn-error" onClick={() => handleDelete(todo.id)}>✗</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {todos.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-2xl opacity-75">No tasks yet. Add your first task above!</p>
        </div>
      )}
    </div>
  );
};

export default Todos;
