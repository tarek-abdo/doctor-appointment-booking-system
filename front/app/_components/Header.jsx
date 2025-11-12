"use client";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu as MenuIcon, X } from "lucide-react";

function Header() {
  const { user } = useKindeBrowserClient();
  const [openMenu, setOpenMenu] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const Menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "My Booking", path: "/my-booking" },
    { id: 3, name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between px-6 py-2 shadow-sm bg-white sticky top-0 z-50">
      {/* Logo & Menu Section */}
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <Image
            src="/logo.svg"
            alt="App Logo"
            width={60}
            height={60}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden p-2 border rounded-md"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Auth Section */}
      {isClient && user ? (
        <Popover>
          <PopoverTrigger>
            <Image
              src={user?.picture || "/default-avatar.png"}
              alt="User"
              width={50}
              height={50}
              className="rounded-full cursor-pointer"
            />
          </PopoverTrigger>
          <PopoverContent className="w-44">
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                Profile
              </li>
              <Link
                href="/my-booking"
                className="cursor-pointer hover:bg-slate-100 p-2 rounded-md"
              >
                My Booking
              </Link>
              <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                <LogoutLink>Log out</LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : isClient ? (
        <LoginLink>
          <Button variant="outline">Get Started</Button>
        </LoginLink>
      ) : null}

      {/* Mobile Breadcrumb Menu */}
      {openMenu && (
        <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md p-4 flex flex-wrap gap-2 text-sm">
          {Menu.map((item, index) => (
            <React.Fragment key={item.id}>
              <Link
                href={item.path}
                className="text-primary font-medium hover:underline"
                onClick={() => setOpenMenu(false)}
              >
                {item.name}
              </Link>
              {index < Menu.length - 1 && (
                <span className="text-gray-400">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
