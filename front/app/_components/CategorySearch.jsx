"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CategorySearch() {
  const [categoryList, setCategoryList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const getCategoryList = useCallback(() => {
    GlobalApi.getCategory()
      .then((res) => {
        setCategoryList(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  useEffect(() => {
    getCategoryList();
  }, [getCategoryList]);

  // ✅ Capitalize only the first letter
  const handleChange = (e) => {
    const value = e.target.value;
    const formatted =
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    setSearchQuery(formatted);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="mb-10 items-center flex flex-col gap-2 px-5  text-center">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-grey-500 text-xl ">
        Search Your <span className="text-primary">Doctors</span> and Book
        Appointment in One Click
      </h2>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex w-full mt-3 max-w-sm items-center space-x-2"
      >
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleChange}
          className="capitalize" // visually shows first letter uppercase
        />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </form>

      {/* Category List */}
      <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-4">
        {categoryList.length > 0
          ? categoryList.map(
              (item, index) =>
                index < 8 && (
                  <Link
                    href={`/search/${item.attributes?.Name}`}
                    key={index}
                    className="flex flex-col gap-2 text-center items-center p-5 bg-blue-50 rounded-lg cursor-pointer m-2 hover:scale-110 transition-all ease-in-out"
                  >
                    <Image
                      src={item.attributes?.Icon?.data?.attributes?.url}
                      alt="icon"
                      width={40}
                      height={40}
                    />
                    <label className="text-blue-600 text-sm">
                      {item?.attributes?.Name}
                    </label>
                  </Link>
                )
            )
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="h-[120px] w-[130px] m-2 animate-pulse bg-slate-200 rounded-lg"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CategorySearch;
