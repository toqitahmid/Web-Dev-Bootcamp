"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {data, isPending} = useSession();

  if(isPending){
    return <div>loading...</div>
  }
  const user = data?.user;
  
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>Better Auth</div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <ThemeToggle></ThemeToggle>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {user ? (
              <>
                <button onClick={() => signOut()}>Sign Out</button>
              </>
            ) : (
              <></>
            )}
          </li>
          <li>
            {user ? (
              <>{user.name}</>
            ) : (
              <>
                <Link href="/auth/signIN">Sign In</Link>
              </>
            )}
          </li>
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <ThemeToggle></ThemeToggle>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              {user ? (
                <>
                  <button onClick={() => signOut()}>Sign Out</button>
                </>
              ) : (
                <></>
              )}
            </li>
            <li>
              {user ? (
                <>{user.name}</>
              ) : (
                <>
                  <Link href="/auth/signIN">Sign In</Link>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
