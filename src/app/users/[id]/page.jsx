import React from 'react'
const getUser = async (id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return data;
}
const UserDetails =async ({params}) => {
    const {id} = params;
    const user = await getUser(id)

    /**
     * 
     * {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }**/
  return (
    
    <div className=' space-y-2 text-2xl'>
     <h3 className='pt-12 text-3xl'>UserDetails :{id}</h3>
     <p>Email: {user.email}</p>
     {/* <p>Address: {user.address}</p> */}
     <p>zipcode: {user.address.zipcode}</p>
     <p>city: {user.address.city}</p>
     <p>lng: {user.address.geo.lng}</p>
    </div>
   
  )
}

export default UserDetails;