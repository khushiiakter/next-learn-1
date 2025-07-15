//client side rendering - state , useeffects;

import Image from "next/image";
import SearchMeal from "./components/SearchMeal";
export const metadata = {
  title: "Meals",
  
};
const Meals = async ({ searchParams }) => {
  const { search } = searchParams;

  const getMeals = async () => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search || ""}`, {cache : "force-cache"}
      );
      const data = await res.json(); 
      // setMeals(data?.meals || []);
      return data.meals || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await getMeals();
  
  return (
    <div>
      <h3 className="font-bold text-2xl">Meals: {meals.length}</h3>
      <SearchMeal></SearchMeal>
     
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 grid-cols-1 p-4">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="card card-border bg-base-100 ">
            <div className="card-body">
              <div className="h-54">
                  <Image src={meal.strMealThumb} width={700} height={700} alt={meal.strMeal} className="w-full h-full object-cover"></Image>
              </div>
              
              <h2 className="card-title justify-center">{meal.strMeal}</h2>
              
              <div className=" ">
                <button className="btn btn-neutral  border-white text-white btn-outline">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {meals.length === 0 && <p className="text-2xl mt-10">No data found.</p>}
    </div>
  );
};

export default Meals;
// "use client";

// import { useEffect, useState } from "react";

// //client side rendering - state , useeffects;

// const Meals = () => {
//   const [meals, setMeals] = useState([]);
//   const [search, setSearch] = useState("");

//   const getMeals = async () => {
//     try {
//       const res = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
//       );
//       const data = await res.json();
//       setMeals(data?.meals || []);
//       return data.meals;
//     } catch (error) {
//       console.log(error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     getMeals();
//   }, [search]);
//   return (
//     <div>
//       <h3>Meals: {meals.length}</h3>
//       <input type="text"
//       value={search} onChange={(e)=> setSearch(e.target.value)}
//       placeholder="Type here" className="input w-2/3 mb-6" />
//       <div className="grid grid-cols-4 gap-4">
//         {meals.map((meal) => (
//           <div className="card card-border bg-base-100 ">
//             <div className="card-body">
//               <h2 className="card-title justify-center">{meal.strMeal}</h2>
//               <p>
//                 A card component has a figure, a body part, and inside body
//                 there are title and actions parts
//               </p>
//               <div className=" ">
//                 <button className="btn btn-neutral border-white text-white btn-outline">
//                   Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Meals;
