import axios from "axios";




const api = "https://68774651dba809d901ee806f.mockapi.io/api/v1/todos";

export const getTodos =async() =>{
    const res =  await axios.get(api);
    return res.data || [];
}

export const addTodo = async (title) => {
    const res = await axios.post(api, {title});
    return res.data;
}