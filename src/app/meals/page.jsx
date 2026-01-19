import Image from "next/image";
import SearchMeal from "./components/SearchMeal";
export const metadata = {
  title: "Meals",
  
};
const Meals = async ({ searchParams }) => {
  const { search } = await searchParams;

  const getMeals = async () => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search || ""}`, {cache : "force-cache"}
      );
      const data = await res.json(); 
      return data.meals || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await getMeals();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold gradient-text mb-4">Delicious Meals</h1>
        <p className="text-xl opacity-90">Discover {meals.length} amazing recipes</p>
        <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="mb-8">
        <SearchMeal></SearchMeal>
      </div>
     
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 grid-cols-1">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              {meal.strMealThumb ? (
                <Image 
                  src={meal.strMealThumb} 
                  width={400} 
                  height={300} 
                  alt={meal.strMeal} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-white/10 flex items-center justify-center text-violet-200/60">
                  🍽️
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12081c]/80 to-transparent"></div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 group-hover:text-violet-300 transition-colors">{meal.strMeal}</h2>
              <button className="btn btn-gradient w-full rounded-full font-semibold">
                🍽️ View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
      {meals.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🍽️</div>
          <p className="text-2xl opacity-75">No meals found. Try a different search!</p>
        </div>
      )}
    </div>
  );
};

export default Meals;
