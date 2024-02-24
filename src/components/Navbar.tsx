"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import DarkToggle from "./DarkToggle";

const links = [
  { url: "/", title: "Home" },
  { url: "/contact", title: "Contact" },
  { url: "/about", title: "About" },
  { url: "/login", title: "Login" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="container my-4 flex h-full items-center justify-between px-4 text-xl">
      {/* LINKS */}
      <div className="md:flex-center hidden w-1/3 gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="flex items-center justify-center rounded-md bg-black p-1 text-sm font-semibold"
        >
          <span className="mr-1 text-white">Svkeivan</span>
          <span className="flex h-8 w-fit items-center justify-center rounded bg-white px-1 text-black">
            blog
          </span>
        </Link>
      </div>
      <DarkToggle />
      {/* SOCIAL */}
      <div className="md:flex-center hidden w-1/3 gap-4">
        <Link href="https://github.com/svkeivan">
          <Image src="/Images/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://instagram.com/svkeivan">
          <Image src="/Images/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/svkeivan/">
          <Image src="/Images/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          title="Menu"
          className="relative z-50 flex h-8 w-10 flex-col justify-between"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className={`h-1 w-10 origin-left rounded ${open ? "bg-white" : "bg-black dark:bg-white"}`}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 rounded bg-black dark:bg-white"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className={`h-1 w-10 origin-left rounded ${open ? "bg-white" : "bg-black dark:bg-white"}`}
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute left-0 top-0 z-30 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black text-4xl text-white"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link className="z-40" href={link.url}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
