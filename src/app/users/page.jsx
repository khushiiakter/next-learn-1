import React from 'react'
import User from '../components/User';

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
    <div className='container mx-auto px-5 md:px-10'>
      <h3 className="text-2xl">All Users: {users.length}</h3>
      <div className='grid grid-cols-4 gap-6'>
        {
          users.map((user)=><User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  )
}

export default Users;