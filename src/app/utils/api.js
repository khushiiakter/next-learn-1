import axios from "axios";

const api = "https://68774651dba809d901ee806f.mockapi.io/api/v1/todos";

const paymentApi ="https://localhost:7040/api/payments"

export const getTodos =async() =>{
    const res =  await axios.get(api);
    return res.data || [];
}

export const addTodo = async (title) => {
    const res = await axios.post(api, {title});
    return res.data;
}

export const deleteTodo = async (id) => {
    const res = await axios.delete(`${api}/${id}`);
    return res.data;
}



// payment test

export const getAllPayments = async () => {
    const res = await axios.get(paymentApi);
    return res.data || [];
}