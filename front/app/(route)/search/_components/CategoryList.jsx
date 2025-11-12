"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  const params = usePathname();
  
  // Memoize category extraction to prevent unnecessary recalculations
  const category = useMemo(() => {
    return params.split("/")[2];
  }, [params]);
  
  const getCategoryList = useCallback(() => {
    GlobalApi.getCategory().then((res) => {
      setCategoryList(res.data.data);
    }).catch(err => {
      console.error('Error fetching categories:', err);
    });
  }, []);

  useEffect(() => {
    getCategoryList();
  }, [getCategoryList]);

  return (
    <div className="h-screen flex flex-col mt-5">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions" className="overflow-visible">
            {categoryList &&
              categoryList.map((item) => (
                <CommandItem key={item.id || item.attributes?.Name}>
                  <Link
                    href={"/search/" + encodeURIComponent(item.attributes?.Name)}
                    className={`p-2 flex gap-2 text-[14px] text-blue-600 rounded-md cursor-pointer w-full items-center transition-colors ${
                      category === item.attributes?.Name ? "bg-blue-200" : ""
                    }`}
                  >
                    <Image
                      src={item.attributes?.Icon?.data?.attributes?.url}
                      alt={item.attributes?.Name || "category icon"}
                      width={25}
                      height={25}
                      loading="lazy"
                      quality={75}
                    />
                    <label className="cursor-pointer">{item.attributes?.Name}</label>
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default React.memo(CategoryList);
