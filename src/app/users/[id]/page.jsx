
export const metadata = {
  title: "User Details",
  
};
const getUser = async (id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return data;
}
const UserDetails =async ({params}) => {
    const {id} = params;
    const user = await getUser(id)

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