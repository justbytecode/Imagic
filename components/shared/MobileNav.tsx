"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between fixed h-16 w-full border-b-4  border-gray-800 bg-gray-900 px-5 lg:hidden">
      <Link href="/dashboard" className="flex items-center gap-2 md:py-2">
        <motion.div
          className="mb-4 mt-4 text-2xl font-bold text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="inline-block text-5xl mt-4 ml-4 mr-4"
            animate={{
              rotateY: [0, 360],
              color: ["#9333ea", "#3b82f6", "#10b981", "#9333ea"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <BrainCircuit />
          </motion.div>
          {/* Logo Can Be Here */}
        </motion.div>
        
      </Link>
      

      <nav className="flex gap-3">
        <SignedIn>
        <Link href={"/"}>
            <Button variant="ghost" className="flex justify-end bg-gray-950">Sign Out</Button>
          </Link>

          <Sheet>
            <SheetTrigger>
            <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <motion.div
                  className="mb-4 text-2xl font-bold text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="inline-block text-5xl ml-4 mr-4"
                    animate={{
                      rotateY: [0, 360],
                      color: ["#9333ea", "#3b82f6", "#10b981", "#9333ea"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  >
                    <BrainCircuit />
                  </motion.div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                    Imagica.AI
                  </span>
                </motion.div>

                <ul className="mt-8 flex w-full flex-col items-start gap-5">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        className={`${
                          isActive &&
                          "bg-purple-gradient bg-cover bg-clip-text text-transparent"
                        } p-18 flex whitespace-nowrap text-dark-700`}
                        key={link.route}
                      >
                        <Link
                          className="p-16-semibold flex size-full gap-4 p-4 cursor-pointer"
                          href={link.route}
                        >
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
      </nav>
    </header>
  );
};

export default MobileNav;
