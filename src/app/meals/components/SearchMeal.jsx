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

  }, [search]);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type here"
        className="input w-2/3 mb-6"
      />
    </div>
  );
};

export default SearchMeal;
