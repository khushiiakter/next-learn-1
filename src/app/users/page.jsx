import React from 'react'
import User from '../components/User';

export const metadata = {
  title: "Users",
  
};
//server side rendering
const getUsers = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

const Users = async () => {

  // get those fetch users on users variable
  const users = await getUsers();

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold gradient-text mb-4">Our Community</h1>
        <p className="text-xl opacity-90">Meet our {users.length} amazing users</p>
        <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
        {
          users.map((user)=><User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  )
}

export default Users;
