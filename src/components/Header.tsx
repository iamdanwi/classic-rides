import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const NavMenu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/cars", label: "Cars" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="font-[notoSerife]">
      <nav className="hidden md:flex items-center justify-between p-4 border-b border-gray-200">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={120}
            className="w-30 h-30"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <ul className="flex space-x-8">
            {NavMenu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-[#D47312] transition-colors duration-300 text-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/booking">
            <Button className="bg-[#D47312] hover:bg-[#B65A0D] text-lg">
              Book a Ride
            </Button>
          </Link>
        </div>
      </nav>

      <div className="block md:hidden border-b">
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex justify-between items-center px-4 py-1">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={120}
                  height={120}
                  className="w-30 h-30"
                />
              </Link>
              <MenuIcon />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="font-[notoSerife] text-2xl">
                Classic Rides
              </SheetTitle>
              <SheetDescription className="font-[notoSerife]">
                Experience the Golden Age of Motoring
              </SheetDescription>
            </SheetHeader>
            <div className="flex items-center mt-4">
              <ul className="flex flex-col items-left font-[notoSerife] space-y-2">
                {NavMenu.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-[#D47312] transition-colors duration-300 text-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <SheetFooter className="absolute bottom-0 left-0 right-0 p-4">
              <Link href="/booking" className="w-full">
                <Button className="bg-[#D47312] hover:bg-[#B65A0D] text-lg font-[notoSerife] w-full">
                  Book a Ride
                </Button>
              </Link>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
