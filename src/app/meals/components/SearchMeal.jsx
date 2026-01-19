"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchMeal = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchQuery = {search};
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);

  }, [search, pathname, router]);
  
  return (
    <div className="flex justify-center">
      <div className="glass-card p-6 w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for delicious meals..."
            className="input input-bordered w-full bg-white/10 border-violet-200/20 text-white placeholder-violet-200/70 pl-12"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-200/70">
            🔍
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMeal;
