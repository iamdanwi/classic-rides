import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto text-[#80756B] font-[notoSerif] mt-3 px-3">
      <div className="flex justify-between items-center ">
        <Link href="/contact">Terms of Services</Link>
        <Link href="/contact">Privacy Policy</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
      <div className="text-center my-2">
        @2025 Classic Rides. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
