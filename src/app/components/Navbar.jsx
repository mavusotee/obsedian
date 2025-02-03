import Link from "next/link";
import Image from "next/image";
import React from "react";

function Navbar() {
  const NavItems = [
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/Services" },
    { name: "Contact Us", href: "/contact" },
  ];
  return (
    <nav className=" flex items-center justify-between p-6 z-[0.6]">
      <div className="flex flex-col font-Inter font-semibold leading-tight -space-y-1 text-xl">
        <span className="font-space_grotesk">OBSEDIAN.STUDIO</span>
      </div>

      <ul className="flex font-poppins items-center justify-center gap-8 text-black">
        {NavItems.map((items, index) => (
          <Link className="text-black" key={items.name} href={items.href}>
            {items.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
