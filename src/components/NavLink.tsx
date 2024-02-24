"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }: { link: { url: string; title: string } }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${pathName === link.url && "bg-black text-white"} dark:text-gray-200`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
